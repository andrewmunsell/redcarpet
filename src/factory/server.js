const express = require('express');

const Server = require('@src/server');

class ServerFactory {
    constructor() {
        const RoutesFactory = require('./routes'),
              LogFactory = require('./log');

        this.server = new Server(express(), global.program.port, RoutesFactory.instance.routes, 
            LogFactory.instance.logger);
    }
}

ServerFactory.instance = new ServerFactory();
module.exports = ServerFactory;