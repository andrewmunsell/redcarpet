module.exports = class MutationResolver {
    constructor(db, uuid) {
        this.resolvers = {
            Mutation: {
                createLibrary: async function (obj, args, context, info) {
                    const result = await db.libraries.put({
                        _id: uuid(),
                        name: args.name
                    });

                    // Get the library DB so it's created on the disk.
                    await db.library(result.id);
                    return db.libraries.get(result.id);
                },

                deleteLibrary: async function (obj, args, context, info) {
                    return db.deleteLibrary(args.id);
                },

                deleteLibraries: async function (obj, args, context, info) {
                    return args.ids.map(id => db.deleteLibrary(id));
                }
            }
        };
    }
}