import { promises as fs } from 'fs';
import { XMLParser, XMLBuilder } from 'fast-xml-parser';

// Options need to be the same for parse and build
// to keep input and output consistent.
const options = {
  ignoreAttributes: false,
  ignoreNameSpace: false,
};

function parseXML(XMLdata) {
  const parser = new XMLParser(options);
  return parser.parse(XMLdata);
}

function buildXML(JSONdata) {
  const builder = new XMLBuilder(options);
  return builder.build(JSONdata);
}

async function readFile(path) {
  const data = await fs.readFile(path, 'utf-8');
  return data;
}

function addTranslationToFile(file, translation) {
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

async function generateMessagesFile(props) {
  const { sourceFile, translations } = props;
  const file = await readFile(sourceFile);
  const parsedFile = parseXML(file);
  let newFile = parsedFile;

  // console.log(translations);

  // Loop trough translation file and find translation
  translations.forEach((translation) => {
    newFile = addTranslationToFile(newFile, translation);
  });

  return buildXML(newFile);
}

export { generateMessagesFile };
