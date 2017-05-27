const ServerInfo = require('./serverInfo');

const Query = `
    # Root query type
    type Query {
        # Information about the current server that this API is running on
        server: ServerInfo!
    }
`;

module.exports = [Query, ServerInfo];