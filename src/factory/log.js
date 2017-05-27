const winston = require('winston');

class LogFactory {
    constructor() {
        this.logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({ level: 'debug' })
            ]
        })
    }
}

LogFactory.instance = new LogFactory();
module.exports = LogFactory;