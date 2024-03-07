// Imports the Google Cloud client library
import { v2 } from '@google-cloud/translate';
import { translatedMessagesMock } from '../mock/translated-messages.mock';
import { TranslateMessageInterface } from '../interfaces/translate-message.interface';

// Creates a client
const translate = new v2.Translate();

// Translates the text into the target language. "text" can be a string for
// translating a single piece of text, or an array of strings for translating
// multiple texts.
async function translateMessages(props: {
  messages: TranslateMessageInterface[];
  targetLanguage: string;
  debug: boolean;
}): Promise<TranslateMessageInterface[]> {
  const { messages, debug, targetLanguage } = props;
  const text: string[] = messages.map((message) => message.source);
  const translatedMessages = [];

  if (debug) {
    console.info('Translating in debug mode.');
    return translatedMessagesMock;
  }

  console.info(`Translating ${messages.length} messages.`);

  // Get translations
  let [translations] = await translate.translate(text, targetLanguage);
  translations = Array.isArray(translations) ? translations : [translations];

  translations.forEach((translation, i) => {
    translatedMessages.push({
      ...messages[i],
      target: translation,
    });
  });

  console.info(`Translating done.`);

  return translatedMessages;
}

export { translateMessages };
