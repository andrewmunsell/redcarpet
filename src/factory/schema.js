const _ = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');

const Schema = require('@src/graphql');

class SchemaFactory {
    constructor() {
        const ResolversFactory = require('./resolvers');

        this.schema = new Schema(makeExecutableSchema, require('@src/graphql/schema'), ResolversFactory.instance.resolvers);
    }
}

SchemaFactory.instance = new SchemaFactory();
module.exports = SchemaFactory;