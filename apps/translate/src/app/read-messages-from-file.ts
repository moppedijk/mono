import { promises as fs } from 'fs';
import { XMLParser } from 'fast-xml-parser';
import { TranslateMessageInterface } from '../interfaces/translate-message.interface';
import { RawJSON } from '../interfaces/raw-json.interface';
import { MessagesXLFInterface } from '../interfaces/messages-xlf.interface';

function parseXML(XMLdata: string): RawJSON<MessagesXLFInterface> {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
  });

  return parser.parse(XMLdata);
}

function mapToTranslationObject(
  rawJSON: RawJSON<MessagesXLFInterface>,
): TranslateMessageInterface[] {
  const translations: TranslateMessageInterface[] = [];

  if (rawJSON.xliff.file.body) {
    rawJSON.xliff.file.body['trans-unit'].forEach((transUnit) => {
      translations.push({
        id: transUnit.id,
        source: transUnit.source,
        target: '',
      });
    });
  }

  return translations;
}

async function readMessagesFromFile(props: {
  sourceFile: string;
}): Promise<TranslateMessageInterface[]> {
  const { sourceFile } = props;
  const data = await fs.readFile(sourceFile, 'utf-8');
  console.info('Reading file:', sourceFile);
  return mapToTranslationObject(parseXML(data));
}

export { readMessagesFromFile };
