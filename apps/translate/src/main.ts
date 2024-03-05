import { writeMessagesFile } from './app/write-messages-file';
import { generateMessagesFile } from './app/generate-messages-file';
import { readMessagesFromFile } from './app/read-messages-from-file';
import { translateMessages } from './app/translate-messages';

async function bootstrap() {
  const sourceFile = 'apps/landing/src/locale/messages.xlf';
  const target = 'apps/landing/src/locale/messages.en.xlf';
  const messages = await readMessagesFromFile({ sourceFile });
  const translations = await translateMessages({ messages, debug: true });
  const targetFile = await generateMessagesFile({ sourceFile, translations });

  writeMessagesFile({ targetFile, target })
    .then(() => console.log('success'));
}

bootstrap();
