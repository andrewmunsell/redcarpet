const _ = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');

const Schema = require('@src/graphql');

class ResolversFactory {
    constructor() {
        const DatabaseFactory = require('./db');

        this.resolvers = _.merge(
            ...[
                new (require('@src/graphql/resolvers/query'))(DatabaseFactory.instance.db, require('uuid/v4')),
                new (require('@src/graphql/resolvers/mutation'))(DatabaseFactory.instance.db, require('uuid/v4')),
            ]
            .map(resolver => resolver.resolvers)
        );
    }
}

ResolversFactory.instance = new ResolversFactory();
module.exports = ResolversFactory;