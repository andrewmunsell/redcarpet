const winston = require('winston');

class LogFactory {
    constructor() {
        this.logger = new (winston.Logger)({
            transports: [
                new (winston.transports.Console)({ level: 'debug' })
            ]
        });

        this.nullLogger = new (winston.Logger)({
            transports: []
        });
    }
}

LogFactory.instance = new LogFactory();
module.exports = LogFactory;