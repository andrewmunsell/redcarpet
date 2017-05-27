/**
 * Database wrapper class
 */
module.exports = class Database {
    constructor(PouchDB, dataFolder, logger) {
        this.PouchDB = PouchDB;
        this.dataFolder = dataFolder;

        logger.debug('Using %s as the root data folder.', dataFolder);
    }
}