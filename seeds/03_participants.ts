import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('participants').del();
  await knex('participants').insert([
    { id: 1, userId: 2, eventId: 1 },
    { id: 2, userId: 6, eventId: 1 },
    { id: 3, userId: 4, eventId: 1 },
    { id: 4, userId: 7, eventId: 1 },
    { id: 5, userId: 3, eventId: 2 },
    { id: 6, userId: 4, eventId: 2 },
    { id: 7, userId: 6, eventId: 2 },
    { id: 8, userId: 1, eventId: 2 },
    { id: 9, userId: 3, eventId: 3 },
    { id: 10, userId: 10, eventId: 3 },
    { id: 11, userId: 9, eventId: 3 },
    { id: 12, userId: 8, eventId: 3 },
    { id: 13, userId: 4, eventId: 4 },
    { id: 14, userId: 6, eventId: 4 },
    { id: 15, userId: 2, eventId: 4 },
    { id: 16, userId: 3, eventId: 4 },
  ]);
}
