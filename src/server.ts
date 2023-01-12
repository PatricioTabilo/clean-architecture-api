import express from 'express';
import noteRouter from './routes/note.router';

// Instancia el servidor
const server: express.Application = express();
const port = 3000;

// Middleware para parsear request JSON
server.use(express.json());

// Aplica el router como middleware
server.use('/notes', noteRouter());

//404 mantener siempre como último middleware
server.use((req, res) =>
  res.status(404).send({ url: `${req.originalUrl} not found` })
);

server.listen(port, () => {
  console.log(`Server listening on: ${port}`);
});
