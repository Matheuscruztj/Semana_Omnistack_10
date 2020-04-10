const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

// extracao do protocolo http do express
const http = require('http');
const cors = require('cors');

const app = express();

// implementação do servidor no protocolo http
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(
  // abaixo deve colocar a sua url de conexao com o mongodb
  '',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
