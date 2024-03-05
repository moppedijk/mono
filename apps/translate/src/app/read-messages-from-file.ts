import { promises as fs } from 'fs';
import { XMLParser } from 'fast-xml-parser';

function parseXML(XMLdata) {
  const parser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: '',
  });

  return parser.parse(XMLdata);
}

function mapToTranslationObject(jObj) {
  const translations = [];

  if (jObj.xliff.file.body) {
    jObj.xliff.file.body['trans-unit'].forEach((transUnit) => {
      translations.push({
        id: transUnit.id,
        source: transUnit.source,
        target: '',
      });
    });
  }

  return translations;
}

async function readMessagesFromFile(props: { sourceFile: string }) {
  const { sourceFile } = props;
  const data = await fs.readFile(sourceFile, 'utf-8');
  console.info('Reading file:', sourceFile);
  return mapToTranslationObject(parseXML(data));
}

export { readMessagesFromFile };
