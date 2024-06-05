import request from 'supertest';
import app from '../src/index'; // Asegúrate de exportar tu app en index.js

describe('GET /', () => {
  it('responds with 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
});