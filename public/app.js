
const socket = io();

socket.on('connect', () => {
    console.log('Conectado al servidor');
});

socket.on('updateTurn', (turn) => {
    const turnElement = document.getElementById('current-turn');
    if (turnElement) {
        turnElement.textContent = turn;
    }
});
