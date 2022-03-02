// 어떤 일의 전과 후에 이벤트 발생

const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(callback) {
        this.emit('log', 'started..');
        callback();
        this.emit('log', 'ended!');
    }
}

module.exports.Logger = Logger;