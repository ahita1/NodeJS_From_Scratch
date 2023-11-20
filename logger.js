const EventEmitter = require('events');

var url = "http://mylogger.io/log";
class Logger extends EventEmitter {
    log(message) {
        // send an HTTP requests
        console.log(message);


        // raise and event haha
        this.emit('messageLogged', { id: 1, url: 'http://log...' })
    
    }
}



module.exports = Logger