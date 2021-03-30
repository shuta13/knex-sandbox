import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable('sandbox');

  if (!exists) {
    return knex.schema.createTable('sandbox', (table) => {
      table.increments('id').primary();
      table.string('user_name', 100);
      table.text('description');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    });
  } else throw new Error('The table already exists');
}

export async function down(knex: Knex): Promise<void> {
  const exists = await knex.schema.hasTable('sandbox');

  if (exists) {
    return knex.schema.dropTable('sandbox');
  }
}
