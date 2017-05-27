const assert = require('chai').assert;

const Server = require('@src/server');

describe('Server', function () {
    it('should be a class with a constructor', function () {
        assert.isTrue(typeof Server === 'function', 'The Server was not a class');
    });
});