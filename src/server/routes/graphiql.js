/**
 * Route that mounts the GraphiQL GUI endpoint on the express server.
 */
module.exports = class GraphiQLRoute {
    constructor(graphiqlExpress, logger) {
        this.graphiqlExpress = graphiqlExpress;
        this.logger = logger;
    }

    /**
     * Mount the route to the given app instance. This should mount the route and
     * setup any resources required to serve the route.
     */
    mount(app) {
        this.logger.debug('Mounted the GraphiQL endpoint on the server');

        app.use('/graphiql', 
            this.graphiqlExpress({
                endpointURL: '/graphql',
            })
        );
    }
}