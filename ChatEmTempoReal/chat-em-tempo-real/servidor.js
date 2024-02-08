// Código do Servidor (Node.js com Express e Socket.IO):

// Importa o módulo HTTP do Node.js para criar um servidor HTTP.
const http = require('http');
// Importa o framework Express, que simplifica a criação de servidores web em Node.js.
const express = require('express');
// Cria uma instância do aplicativo Express.
const app = express();
// Cria um servidor HTTP usando o aplicativo Express.
const servidorHttp = http.createServer(app);
// Configura o Socket.IO para usar o servidor HTTP criado anteriormente.
const io = require('socket.io')(servidorHttp);


// Adiciona um ouvinte para eventos de conexão de clientes.
io.addListener('connection', (socket) => {
    // Imprime uma mensagem no console quando um cliente se conecta.
    console.log('Cliente conectado');
    // Adiciona um ouvinte para eventos de 'nova mensagem'.
    socket.addListener('nova mensagem', (msg) => {
        // Emite a nova mensagem para todos os clientes conectados.
        io.emit('nova mensagem', msg);
    });
})


// Configura o Express para servir arquivos estáticos da pasta 'public'.
app.use(express.static('./public')); 
// Inicia o servidor, ouvindo na porta 8008 e no endereço IP '192.168.1.106'.
servidorHttp.listen(8008, '192.168.1.106');

// node --watch ./servidor.js executa o servidor fazendo-o reiniciar toda vez que algum arquivo é modificado 