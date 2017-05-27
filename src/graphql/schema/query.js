const Query = `
    # Root query type
    type Query {
        # Current version of the server
        version: String!
    }
`;

module.exports = [Query];