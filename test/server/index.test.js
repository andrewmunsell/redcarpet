const assert = require('chai').assert,  
      td = require('testdouble');

const Server = require('@src/server'),
      LogFactory = require('@src/factory/log');

describe('Server', function () {
    it('should be a class with a constructor', function () {
        assert.isTrue(typeof Server === 'function', 'The Server was not a class');
    });

    describe('#constructor()', function () {
        it('should listen on the given port', function () {
            const PORT = 3000;
            const appMock = { listen: td.function () };
            const logger = LogFactory.instance.nullLogger;

            new Server(appMock, PORT, [], logger);

            td.verify(appMock.listen(PORT));
        });

        it('should loop over the routes and mount each one', function () {
            const PORT = 3000;
            const appMock = { listen: td.function () };
            const routeMock = { mount: td.function () };
            const logger = LogFactory.instance.nullLogger;

            new Server(appMock, PORT, [routeMock], logger);

            td.verify(routeMock.mount(appMock));
        });
    });
});