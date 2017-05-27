const _ = require('lodash');

const Query = require('./query'),
      Mutation = require('./mutation');

const Schema = `
    schema {
        query: Query,
        mutation: Mutation
    }
`;

module.exports = _.flattenDeep([Schema, Query, Mutation]);