const path = require('path');

/**
 * Database wrapper class
 */
module.exports = class Database {
    constructor(PouchDB, dataFolder, fs, logger) {
        this.PouchDB = PouchDB;
        this.dataFolder = dataFolder;

        if (!fs.existsSync(dataFolder)) {
            fs.mkdirSync(this.dataFolder);
        }

        logger.debug('Using %s as the root data folder.', dataFolder);

        // Global databases
        this.settings = new this.PouchDB(path.join(dataFolder, 'settings.db'));
        this.users = new this.PouchDB(path.join(dataFolder, 'users.db'));
        this.libraries = new this.PouchDB(path.join(dataFolder, 'libraries.db'));

        // Library databases
        this.__library = {};
    }

    /**
     * Get the library database with the given ID, or create a new library database for that
     * ID if one does not exist yet.
     */
    async library(id) {
        if (this.__library[id]) {
            return this.__library[id];
        }

        try {
            await this.libraries.get(id);
        } catch(e) {
            if (e.status === 404) {
                return null;
            } else {
                throw e;
            }
        }

        const library = new this.PouchDB(path.join(this.dataFolder, `library-${id}.db`));
        this.__library[id] = library;

        return library;
    }

    /**
     * Delete the library with the specified ID.
     */
    async deleteLibrary(id) {
        const library = await this.library(id);
        if (!library) {
            throw new Error('The requested library does not exist.');
        }

        delete this.__library[id];
        await library.destroy();

        const libraryDoc = await this.libraries.get(id);
        await this.libraries.remove(libraryDoc);

        return true;
    }
}