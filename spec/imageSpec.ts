import supertest from 'supertest';
import app from '../src/server';

const request = supertest(app);

describe('Image Endpoint Tests', () => {

  it('returns 200 for valid query parameters', async () => {
    const response = await request.get(
      '/api/images?filename=fjord&width=200&height=200'
    );
    expect(response.status).toBe(200);
  });

  it('returns 400 when parameters are missing', async () => {
    const response = await request.get('/api/images');
    expect(response.status).toBe(400);
  });

});