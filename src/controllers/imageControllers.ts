import { Request, Response } from 'express';
import resizeImage from '../services/resizeImage';

const resize = async (req: Request, res: Response): Promise<void> => {
  try {
    const filename = req.query.filename as string;
    const w = parseInt(req.query.width as string);
    const h = parseInt(req.query.height as string);

    if (!filename ) {
      res.status(400).send('Missing filename');
      return;
    }

    if (isNaN(w) || isNaN(h) || w <= 0 || h <= 0|| !req.query.width || !req.query.height) {
      res.status(400).send('Width and height incorect');
      return;
    }

    const imagePath = await resizeImage(filename, w, h);
    res.status(200).sendFile(imagePath);

  } catch (error) {
    res.status(404).send('Image not found');
  }
};

export default resize;
