// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: 'user',
      password: 'pass',
      database: 'sandbox',
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: __dirname + '/src/db/seeds',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: __dirname + '/src/db/migrations',
      tableName: 'knex_migrations',
    },
  },
};
