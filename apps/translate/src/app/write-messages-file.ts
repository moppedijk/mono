import { promises as fs } from 'fs';

async function writeMessagesFile(props: {
  targetFile: string;
  data: string;
}): Promise<void> {
  const { data, targetFile } = props;
  return await fs.writeFile(targetFile, data);
}

export { writeMessagesFile };
