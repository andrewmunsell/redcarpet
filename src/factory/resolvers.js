const _ = require('lodash');
const { makeExecutableSchema } = require('graphql-tools');

const Schema = require('@src/graphql');

class ResolversFactory {
    constructor() {
        this.resolvers = _.merge(
            ...[
                new (require('@src/graphql/resolvers/version'))()
            ]
            .map(resolver => resolver.resolvers)
        );
    }
}

ResolversFactory.instance = new ResolversFactory();
module.exports = ResolversFactory;