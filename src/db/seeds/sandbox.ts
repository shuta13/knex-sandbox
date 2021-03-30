import { Knex } from 'knex';
import { Sandbox } from '../../types/sandbox';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('sandbox').del();

  // Inserts seed entries
  await knex<Sandbox>('sandbox').insert([
    {
      user_name: 'did0es',
      description: 'Engineer',
    },
    {
      user_name: 'shuta 13',
      description: 'Designer, student',
    },
  ]);
}
