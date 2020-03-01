const { io } = require('../server');
const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on('nextTicket', (data, callback) => {

        let next = ticketControl.next();
        
        console.log(next);

        callback(next);
    });

    client.emit('currState', {
        current: ticketControl.getLastTicket(),
        lastFour: ticketControl.getLastFour()
    });

    client.on('attendTicket', ( data, callback ) => {
        if ( !data.desktop ) {
            return callback({
                err: true,
                message: 'The desktop is necessary'
            })
        }

        let attendTicket = ticketControl.attendTicket(data.desktop);

        callback(attendTicket);

        client.broadcast.emit('lastFour', {
            lastFour: ticketControl.getLastFour()
        })
    });

});