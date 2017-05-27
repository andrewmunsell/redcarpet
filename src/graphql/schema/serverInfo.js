const ServerInfo = `
    # Object containing information about a server installation.
    type ServerInfo {
        # Unique ID of the server.
        id: String!

        # Version number of the server software.
        version: String!
    }
`;

module.exports = [ServerInfo];