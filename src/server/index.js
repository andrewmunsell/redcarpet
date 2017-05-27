/**
 * Primary entry-point for the HTTP server that powers the API
 */
module.exports = class Server {
    constructor(app, port, routes, logger) {
        this.app = app;

        this.app.listen(port);
        logger.info('Starting server on port %s', port);

        routes.forEach(route => route.mount(app));
    }
}