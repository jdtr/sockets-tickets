const socket = io();

let lblTicket1 = document.getElementById("lblTicket1");
let lblTicket2 = document.getElementById("lblTicket2");
let lblTicket3 = document.getElementById("lblTicket3");
let lblTicket4 = document.getElementById("lblTicket4");

let lblDesktop1 = document.getElementById("lblDesktop1");
let lblDesktop2 = document.getElementById("lblDesktop2");
let lblDesktop3 = document.getElementById("lblDesktop3");
let lblDesktop4 = document.getElementById("lblDesktop4");

let lblTickets = [lblTicket1, lblTicket2, lblTicket3, lblTicket4];
let lblDesks = [lblDesktop1, lblDesktop2, lblDesktop3, lblDesktop4];


socket.on('currState', function ( data ) {
    updateHTML(data.lastFour)
});

socket.on('lastFour', function (data) {
    let audio = new Audio('audio/new-ticket.mp3')
    console.log(audio)
    audio.play();
    updateHTML(data.lastFour)
})

function updateHTML( lastFour ) {  

    for ( let i = 0; i < lastFour.length; i++ ) {
        console.log(i)
        lblTickets[i].textContent = `Ticket ${lastFour[i].number }`;
        lblDesks[i].textContent = `Ticket ${lastFour[i].desktop }`;
    }
}