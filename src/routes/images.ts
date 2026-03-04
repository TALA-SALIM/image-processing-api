import express from 'express';
import resizeImageHandler from '../controllers/imageControllers';

const router = express.Router();

router.get('/', resizeImageHandler);

export default router;
