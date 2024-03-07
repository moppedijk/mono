import { promises as fs } from 'fs';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';
import { RawJSON } from '../interfaces/raw-json.interface';
import { MessagesXLFInterface } from '../interfaces/messages-xlf.interface';
import { TranslateMessageInterface } from '../interfaces/translate-message.interface';

// Options need to be the same for parse and build
// to keep input and output consistent.
const options = {
  ignoreAttributes: false,
  ignoreNameSpace: false,
};

function parseXML(XMLdata: string): RawJSON<MessagesXLFInterface> {
  const parser = new XMLParser(options);
  return parser.parse(XMLdata);
}

function buildXML(JSONdata: RawJSON<MessagesXLFInterface>): string {
  const builder = new XMLBuilder(options);
  return builder.build(JSONdata);
}

async function readFile(path: string): Promise<string> {
  return await fs.readFile(path, 'utf-8');
}

function addTranslationToFile(props: {
  file: RawJSON<MessagesXLFInterface>;
  translation: TranslateMessageInterface;
}): RawJSON<MessagesXLFInterface> {
  const { file, translation } = props;
  const attributePrefix = '@_';
  const id = `${attributePrefix}id`;

  if (!file) {
    return;
  }

  if (file.xliff.file.body) {
    file.xliff.file.body['trans-unit'].map((transUnit) => {
      if (translation.id === transUnit[id]) {
        transUnit['target'] = translation.target;
      }
    });
  }

  return file;
}

async function generateMessagesFile(props: {
  sourceFile: string;
  translations: TranslateMessageInterface[];
}): Promise<string> {
  const { sourceFile, translations } = props;
  const file = await readFile(sourceFile);
  const parsedFile = parseXML(file);
  let newFile = parsedFile;

  // Conside: looping trough translation file and find translation
  // thus the other way around.
  translations.forEach((translation) => {
    newFile = addTranslationToFile({ file: newFile, translation });
  });

  return buildXML(newFile);
}

export { generateMessagesFile };
