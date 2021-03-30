const env = process.env.ENVIRONMENT || 'development';
const knexConfig = require('../../knexfile')[env];
module.exports = require('knex')(knexConfig);
