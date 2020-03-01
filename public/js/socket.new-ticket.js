// Vars
const socket = io();

let label = document.getElementById("lblNuevoTicket"); 
// Sockets
socket.on('connect', function() {
    console.log('Connected to the server')
});

socket.on('disconnect', function() {
    console.log('Disconnected from the server')
});

socket.on('currState', function ( resp ) {
    label.textContent = resp.current;
});

// Events

document.querySelector('button').addEventListener('click', function (e) {
    e.preventDefault();
    socket.emit('nextTicket', null, function ( nextTicket ) {
        console.log(nextTicket)

        label.textContent = nextTicket;
    })
});