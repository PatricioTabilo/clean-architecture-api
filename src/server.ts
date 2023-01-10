import express from 'express';

// Instancia el servidor
const server: express.Application = express();
const port = 3000;

// Middleware para parsear request JSON
server.use(express.json());

server.listen(port, () => {
  console.log(`Server listening on: ${port}`);
});
