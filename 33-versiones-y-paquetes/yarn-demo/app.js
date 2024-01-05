import express from 'express';
import operations from 'my-330-calculator-package';

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello from yarn 😁📦😍');
});

app.get('/sum/:a/:b', (req, res) => {
  const { params: { a, b } } = req;
  res.status(200).send(`Suma: ${operations.sum(parseInt(a), parseInt(b))}`);
});

app.get('/rest/:a/:b', (req, res) => {
  const { params: { a, b } } = req;
  res.status(200).send(`Resta: ${operations.rest(parseInt(a), parseInt(b))}`);
});

app.get('/mult/:a/:b', (req, res) => {
  const { params: { a, b } } = req;
  res.status(200).send(`Multiplicacion: ${operations.mult(parseInt(a), parseInt(b))}`);
});

app.get('/divs/:a/:b', (req, res) => {
  const { params: { a, b } } = req;
  res.status(200).send(`Division: ${operations.divs(parseInt(a), parseInt(b))}`);
});

app.listen(8080, () => {
  console.log('Server running in http://localhost:8080 🎉');
});