const path = require('path');

const Database = require('@src/db');

class DatabaseFactory {
    constructor() {
        const PouchDB = require('pouchdb');
        PouchDB.plugin(require('pouchdb-find'));

        const LogFactory = require('./log');

        this.db = new Database(PouchDB, global.program.dataFolder || this.appDataFolder(), LogFactory.instance.logger);
    }

    /**
     * Get the app data folder based on the current platform.
     * 
     * @see https://stackoverflow.com/questions/19275776/node-js-how-to-get-the-os-platforms-user-data-folder
     */
    appDataFolder() {
        const rootAppDataFolder = process.env.APPDATA || 
            (
                process.platform == 'darwin' ? 
                    path.join(process.env.HOME, 'Library', 'Preferences') :
                    path.join('/var', 'local')
            );

        return path.join(rootAppDataFolder, 'RedCarpet');
    }
}

DatabaseFactory.instance = new DatabaseFactory();
module.exports = DatabaseFactory;