import express from 'express';
import http from 'http';
import cors from 'cors';

const app = express();
const PORT = 8080;

const whiteList = [
  'http://localhost:5501', // Admin
  'http://localhost:8081', // Store
  'http://localhost:3001' // Aditory
];

// app.use(cors()); // Enable All CORS Requests
app.use(cors({
  origin: function (origin, callback) {
    console.log('origin', origin);
    if (whiteList.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS.'));
    }
  },
}))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/origin-demo', (req, res) => {
  res.status(200).json({ message: 'Hello Coder House 🖐️' });
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT} 🚀`);
});