const socket = io();
const searchParams = new URLSearchParams( window.location.search );

if ( !searchParams.has('desktop') ) {
    window.location = 'index.html';
    throw new Error ('the desktop is necessary');
}

let desktop = searchParams.get('desktop');
let label = document.querySelector('small');

document.querySelector("h1").textContent = `Desktop ${ desktop }`;

document.querySelector("button").addEventListener("click", function () {
    socket.emit("attendTicket", { desktop }, function ( resp ) {
        console.log(resp)
        if ( resp === "There isn't tickets" ) {
            label.textContent = resp;
            alert(resp);
            return;
        }
        label.textContent = `Ticket ${ resp.number }`;
    })
})