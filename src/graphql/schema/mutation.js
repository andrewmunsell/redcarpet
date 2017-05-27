const Library = require('./library');

const Mutation = `
    # Root mutation type for performing write operations on the API.
    type Mutation {
        # Create a new library with the given name.
        createLibrary(name: String!): Library

        # Delete the given library.
        deleteLibrary(id: String!): Boolean

        # Delete all of the libraries with the specified IDs.
        deleteLibraries(ids: [String!]!): Boolean
    }
`;

module.exports = [Mutation, Library];