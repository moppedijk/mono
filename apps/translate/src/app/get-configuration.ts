import { promises as fs } from 'fs';
import { TranslateConfigInterface } from '../interfaces/translate-config.interface';

async function readFile(path: string): Promise<string> {
  return await fs.readFile(path, 'utf-8');
}

function getConfigFilePath(): string {
  const config = process.argv
    .filter((value, index) => index > 1)
    .find((value) => {
      const argument = value.split('=');
      return argument[0] === 'config';
    });

  if (config) {
    return config.split('=')[1];
  }

  return '';
}

async function getConfiguration(): Promise<TranslateConfigInterface | null> {
  const path = getConfigFilePath();
  const configFile = await readFile(path);
  const config = JSON.parse(configFile) as TranslateConfigInterface;

  if (config && config.locales) {
    return config;
  }

  return null;
}

export { getConfiguration };
