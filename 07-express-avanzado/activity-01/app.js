import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let frase = 'Hello People!';

app.get('/api/words', (req, res) => {
  res.json({ frase });
});

app.get('/api/words/:pos', (req, res) => {
  const { pos } = req.params;
  const wordSet = frase.split(' ');
  if (pos < 1 || pos >= (wordSet.length + 1)) {
    res
      .status(404)
      .json({ status: 'error', message: 'Word not found' });
    return;
  }
  const word = wordSet[pos - 1];
  res.json({ word });
});

app.post('/api/words', (req, res) => {
  const { word } = req.body;
  if (!word) {
    res
      .status(400)
      .json({ status: 'error', message: 'Invalid data' });
    return;
  }
  const wordSet = frase.split(' ');
  const position = wordSet.length + 1;
  wordSet.push(word);
  frase = wordSet.join(' ');
  res
    .status(201)
    .json({ added: word, position });
});

app.put('/api/words/:pos', (req, res) => {
  const { pos } = req.params;
  const { word } = req.body;
  const wordSet = frase.split(' ');
  if (pos < 1 || pos >= (wordSet.length + 1)) {
    res
      .status(404)
      .json({ status: 'error', message: 'Word not found' });
    return;
  }
  if (!word) {
    res
      .status(400)
      .json({ status: 'error', message: 'Invalid data' });
    return;
  }
  const before = wordSet[pos - 1];
  wordSet[pos - 1] = word;
  frase = wordSet.join(' ');
  res
    .status(200)
    .json({ updated: word, before });
});

app.delete('/api/words/:pos', (req, res) => {
  const { pos } = req.params;
  const wordSet = frase.split(' ');
  if (pos < 1 || pos >= (wordSet.length + 1)) {
    res
      .status(404)
      .json({ status: 'error', message: 'Word not found' });
    return;
  }
  const deleted = wordSet.splice(pos - 1, 1);
  frase = wordSet.join(' ');
  res
    .status(200)
    .json({ deleted: deleted[0] });
});

const server = app.listen(8080, () => {
  console.log(`Servidor corriendo en el puerto ${server.address().port}`);
});