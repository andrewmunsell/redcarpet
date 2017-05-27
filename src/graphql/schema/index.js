const _ = require('lodash');

const Query = require('./query');

const Schema = `
    schema {
        query: Query
    }
`;

module.exports = _.flattenDeep([Schema, Query]);