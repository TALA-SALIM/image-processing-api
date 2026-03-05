import { Request, Response } from 'express';
import path from 'path';
import resizeImage from '../services/resizeImage';

const imageController = async (req: Request, res: Response): Promise<void> => {
  try {
    const filename = req.query.filename as string;
    const width = parseInt(req.query.width as string);
    const height = parseInt(req.query.height as string);

    const inputPath = path.resolve(`assets/images/${filename}.jpg`);
    const outputPath = path.resolve(
      `assets/thumb/${filename}_${width}_${height}.jpg`,
    );

    await resizeImage(inputPath, outputPath, width, height);

    res.sendFile(outputPath);
  } catch {
    res.status(400).send('Error processing image');
  }
};

export default imageController;
