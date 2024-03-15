import { writeMessagesFile } from './app/write-messages-file';
import { generateMessagesFile } from './app/generate-messages-file';
import { readMessagesFromFile } from './app/read-messages-from-file';
import { translateMessages } from './app/translate-messages';
import { getConfiguration } from './app/get-configuration';

async function initialize() {
  const config = await getConfiguration();
  const locales = Object.keys(config.locales) ?? [];

  if (!config) {
    return;
  }

  console.info(`Translating ${locales.length} files.`);

  locales.forEach(async function (targetLanguage) {
    const sourceFile = config.sourceLocaleFile;
    const targetFile = config.locales[targetLanguage];
    const messages = await readMessagesFromFile({ sourceFile });
    const translations = await translateMessages({
      messages,
      targetLanguage,
      debug: false,
    });
    const data = await generateMessagesFile({ sourceFile, translations });

    writeMessagesFile({ targetFile, data }).then(() => {
      console.info('Translating done:', targetFile);
    });
  });
}

initialize();
