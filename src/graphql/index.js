module.exports = class GraphQLSchema {
    constructor(makeExecutableSchema, schemas, resolvers) {
        this.graphQLSchema = makeExecutableSchema({
            typeDefs: schemas,
            resolvers
        });
    }
}