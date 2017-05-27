const Library = `
    # Object representing a media library
    type Library {
        # Globally unique ID of the media library
        _id: String!

        # Revision ID of the library. This must be included in updates for conflict resolution.
        _rev: String!

        # Name of the library as provided by the user.
        name: String
    }
`;

module.exports = Library;