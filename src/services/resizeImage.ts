import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const resizeImage = async (
  inputPath: string,
  outputPath: string,
  width: number,
  height: number,
): Promise<void> => {
  const dir = path.dirname(outputPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (fs.existsSync(outputPath)) {
    return;
  }

  await sharp(inputPath).resize(width, height).toFile(outputPath);
};

export default resizeImage;
