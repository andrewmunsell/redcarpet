const bodyParser = require('body-parser'),
      { graphqlExpress, graphiqlExpress } = require('graphql-server-express');

const GraphQLRoute = require('@src/server/routes/graphql'),
      GraphiQLRoute = require('@src/server/routes/graphiql');

class RoutesFactory {
    constructor() {
        const LogFactory = require('./log'),
              SchemaFactory = require('./schema');

        this.routes = [
            new GraphQLRoute(bodyParser.json(), graphqlExpress, 
                SchemaFactory.instance.schema.graphQLSchema, LogFactory.instance.logger),
            new GraphiQLRoute(graphiqlExpress, LogFactory.instance.logger)
        ];
    }
}

RoutesFactory.instance = new RoutesFactory();
module.exports = RoutesFactory;