import express from 'express';
import imagesRoutes from './routes/images';

const app = express();
const port = 8000;

app.use('/api/images', imagesRoutes);

app.get('/', (req, res) => {
  res.send('Image Processing Project (API) is running !');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

export default app;
