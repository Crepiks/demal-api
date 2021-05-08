import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tour_tags', (table) => {
    table.increments('id');
    table.integer('tourId').unsigned().notNullable();
    table.foreign('tourId').references('tours.id').onDelete('CASCADE');
    table.integer('tagId').unsigned().notNullable();
    table.foreign('tagId').references('tags.id').onDelete('CASCADE');
    table.unique(['tourId', 'tagId']);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tour_tags');
}
