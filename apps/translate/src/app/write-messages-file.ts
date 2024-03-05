import { promises as fs } from 'fs';

async function writeMessagesFile(props: { targetFile: string, target: string }): Promise<void> {
    const { targetFile, target } = props;
    return await fs.writeFile(target, targetFile);
}

export {
    writeMessagesFile
}