import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const resizeImage = async (
  filename: string,
  width: number,
  height: number,
): Promise<string> => {
  const fullPath = path.join(
    process.cwd(),
    'assets',
    'fullimage',
    `${filename}.jpg`,
  );

  const thumbPath = path.join(
    process.cwd(),
    'assets',
    'thumb',
    `${filename}_${width}_${height}.jpg`,
  );

  if (!fs.existsSync(fullPath)) {  throw new Error('Image not found'); }

  if (!fs.existsSync(thumbPath)) { await sharp(fullPath).resize(width, height).toFile(thumbPath);}

  return thumbPath;
};

export default resizeImage;
