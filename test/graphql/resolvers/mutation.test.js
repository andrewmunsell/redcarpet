const assert = require('chai').assert,  
      td = require('testdouble');

const MutationResolver = require('@src/graphql/resolvers/mutation');

describe('graphql', function () {
    describe('resolvers', function () {
        describe('MutationResolver', function () {
            describe('Mutation', function () {
                describe('#createLibrary()', function () {
                    it('should create a new library database and insert the library into the libraries database', async function () {
                        const NAME = 'name';
                        const UUID = 'uuid';

                        const libraryDbMock = { get: td.function() };
                        const dbMock = {
                            libraries: {
                                put: td.function(),
                                get: td.function()
                            },

                            library: td.function()
                        };

                        const uuidMock = td.function();
                        td.when(uuidMock()).thenReturn(UUID);

                        td.when(dbMock.libraries.put(td.matchers.anything()))
                            .thenReturn(Promise.resolve({ id: UUID }));

                        const mutationResolver = new MutationResolver(dbMock, uuidMock);
                        await mutationResolver.resolvers.Mutation.createLibrary(null, { name: NAME }, null, null);

                        td.verify(dbMock.library(UUID));
                        td.verify(dbMock.libraries.get(UUID));
                    });
                });

                describe('#deleteLibrary()', function () {
                    it('should call #deleteLibrary() on the database', async function () {
                        const UUID = 'uuid';

                        const dbMock = {
                           deleteLibrary: td.function()
                        };

                        const uuidMock = td.function();

                        const mutationResolver = new MutationResolver(dbMock, uuidMock);
                        await mutationResolver.resolvers.Mutation.deleteLibrary(null, { id: UUID }, null, null);

                        td.verify(dbMock.deleteLibrary(UUID));
                    });
                });

                describe('#deleteLibraries()', function () {
                    it('should call #deleteLibrary() on the database for each of the IDs', async function () {
                        const UUIDs = ['uuid', 'uuid2'];

                        const dbMock = {
                           deleteLibrary: td.function()
                        };

                        const uuidMock = td.function();

                        const mutationResolver = new MutationResolver(dbMock, uuidMock);
                        await mutationResolver.resolvers.Mutation.deleteLibraries(null, { ids: UUIDs }, null, null);

                        td.verify(dbMock.deleteLibrary(td.matchers.anything()), { times: UUIDs.length });
                    });
                });
            });
        });
    });
});