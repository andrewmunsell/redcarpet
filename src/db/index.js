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

        this.settings = new PouchDB(path.join(dataFolder, 'settings.db'));
    }
}