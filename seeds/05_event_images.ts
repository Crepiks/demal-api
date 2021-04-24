import * as Knex from 'knex';

export async function seed(knex: Knex): Promise<void> {
  await knex('event_images').del();
  await knex('event_images').insert([
    { id: 1, eventId: 1, imageId: 1 },
    { id: 2, eventId: 1, imageId: 2 },
    { id: 3, eventId: 1, imageId: 3 },
    { id: 4, eventId: 1, imageId: 4 },
    { id: 5, eventId: 1, imageId: 5 },
    { id: 6, eventId: 1, imageId: 6 },
    { id: 7, eventId: 1, imageId: 7 },
    { id: 8, eventId: 1, imageId: 8 },
    { id: 9, eventId: 2, imageId: 9 },
    { id: 10, eventId: 2, imageId: 10 },
    { id: 11, eventId: 2, imageId: 11 },
    { id: 12, eventId: 2, imageId: 12 },
    { id: 13, eventId: 2, imageId: 13 },
    { id: 14, eventId: 2, imageId: 14 },
    { id: 15, eventId: 2, imageId: 15 },
    { id: 16, eventId: 2, imageId: 16 },
    { id: 17, eventId: 3, imageId: 17 },
    { id: 18, eventId: 3, imageId: 18 },
    { id: 19, eventId: 3, imageId: 19 },
    { id: 20, eventId: 3, imageId: 20 },
    { id: 21, eventId: 3, imageId: 21 },
    { id: 22, eventId: 3, imageId: 22 },
    { id: 23, eventId: 3, imageId: 23 },
    { id: 24, eventId: 3, imageId: 24 },
    { id: 25, eventId: 4, imageId: 25 },
    { id: 26, eventId: 4, imageId: 26 },
    { id: 27, eventId: 4, imageId: 27 },
    { id: 28, eventId: 4, imageId: 28 },
    { id: 29, eventId: 4, imageId: 29 },
    { id: 30, eventId: 4, imageId: 30 },
    { id: 31, eventId: 4, imageId: 31 },
    { id: 32, eventId: 4, imageId: 32 },
  ]);
}
