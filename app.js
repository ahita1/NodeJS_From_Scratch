const EventEmitter = require('events');
const emitter = new EventEmitter()

// register a listeners
emitter.on('messageLogged', (arg) => {
    console.log('Listener called ,', arg);
})

const log = require('./logger')
log("message")
