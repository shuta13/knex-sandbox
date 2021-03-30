import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable('sandbox');

  if (!exists) {
    return knex.schema.createTable('sandbox', (t) => {
      t.increments('id').primary();
      t.string('first_name', 100);
      t.string('last_name', 100);
      t.text('bio');
    });
  } else throw new Error('The table already exists');
}

export async function down(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable('sandbox');

  if (exists) {
    return knex.schema.dropTable('sandbox');
  }
}
