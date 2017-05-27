module.exports = class QueryResolver {
    constructor(db, uuid) {
        this.resolvers = {
            Query: {
                server: async function (obj, args, context, info) {
                    var id;
                    try {
                        id = (await db.settings.get('id')).value;
                    } catch(e) {
                        if (e.status === 404) {
                            id = uuid();

                            await db.settings.put({ _id: 'id', value: id });
                        } else {
                            throw e;
                        }
                    }

                    const version = require('@redcarpet/package.json').version;

                    return {
                        id,
                        version
                    };
                }
            }
        };
    }
}