import express from 'express';
import indexRoute from '@routes/index.route';

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' });
});

app.use('/', indexRoute);

app.listen(3000, () => {
  console.log('Server running');
});
