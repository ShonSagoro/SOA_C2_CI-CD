import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.status(200).send('Hello World!, Shon Sagoro is heree!, with docker!! and Jenkins!');
});

app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});

export default app;