const EventEmitter = require('events');
const emitter = new EventEmitter()


var url = "http://mylogger.io/log";

function log(message) {
    // send an HTTP requests
    console.log(message);

    emitter.emit('messageLogged', { id: 1, url: 'http://log...' })

}


module.exports = log