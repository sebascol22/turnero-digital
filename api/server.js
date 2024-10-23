
const express = require('express');
const { Server } = require('socket.io');
const http = require('http');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Cliente conectado');
    let currentTurn = 1;

    socket.on('nextTurn', () => {
        currentTurn++;
        io.emit('updateTurn', currentTurn);
    });

    socket.on('resetTurns', () => {
        currentTurn = 1;
        io.emit('updateTurn', currentTurn);
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
