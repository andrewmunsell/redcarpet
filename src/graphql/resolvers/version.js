module.exports = class VersionResolver {
    constructor() {
        this.resolvers = {
            Query: {
                version: function (obj, args, context, info) {
                    return require('@redcarpet/package.json').version;
                }
            }
        };
    }
}