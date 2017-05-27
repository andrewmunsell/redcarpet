module.exports = class ServerInfoResolver {
    constructor(db) {
        this.resolvers = {
            Server: {
                id: function (obj, args, context, info) {
                    return 'id';
                }
            }
        };
    }
}