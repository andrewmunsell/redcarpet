require('module-alias/register');

const program = require('commander');
global.program = program;

program
    .version(require('@redcarpet/package.json').version)
    .option('-d, --data <dataFolder>', 'Path to the data folder where configuration information and the database is stored.')
    .option('-p, --port <port>', 'Port to run the server on. This parameter is required.')
    .parse(process.argv);

if (!program.port) {
    throw new Error('A port must be specified.');
}

const server = require('@src/factory/server').instance.server;