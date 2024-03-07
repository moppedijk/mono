import { writeMessagesFile } from './app/write-messages-file';
import { generateMessagesFile } from './app/generate-messages-file';
import { readMessagesFromFile } from './app/read-messages-from-file';
import { translateMessages } from './app/translate-messages';
import { LanguageCodeEnum } from './enums/language-code.enum';

async function initialize() {
  const languageCode = LanguageCodeEnum.Swedish;
  const targetLanguage = languageCode.toLowerCase();
  const sourceFile = 'apps/landing/src/locale/messages.xlf';
  const targetFile = `apps/landing/src/locale/messages.${targetLanguage}.xlf`;
  const messages = await readMessagesFromFile({ sourceFile });
  const translations = await translateMessages({
    messages,
    targetLanguage,
    debug: false,
  });
  const data = await generateMessagesFile({ sourceFile, translations });

  writeMessagesFile({ targetFile, data }).then(() =>
    console.log('Writing file:', targetFile),
  );
}

initialize();
