/**
 * Route that mounts the GraphQL API endpoint on the express server.
 */
module.exports = class GraphQLRoute {
    constructor(jsonBodyParser, graphqlExpress, schema, logger) {
        this.jsonBodyParser = jsonBodyParser;
        this.graphqlExpress = graphqlExpress;
        this.schema = schema;
        this.logger = logger;
    }

    /**
     * Mount the route to the given app instance. This should mount the route and
     * setup any resources required to serve the route.
     */
    mount(app) {
        this.logger.debug('Mounted GraphQL API route on the server');

        app.use('/graphql', 
            this.jsonBodyParser,
            this.graphqlExpress(request => 
                ({
                    schema: this.schema
                })
            )
        );
    }
}