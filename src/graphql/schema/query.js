const ServerInfo = require('./serverInfo'),
      Library = require('./library');

const Query = `
    # Root query type for performing read operations on the API.
    type Query {
        # Information about the current server that this API is running on.
        server: ServerInfo!

        # Array of all libraries that have been added to the server.
        libraries: [Library]!
    }
`;

module.exports = [Query, ServerInfo, Library];