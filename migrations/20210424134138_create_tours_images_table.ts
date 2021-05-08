import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tours_images', (table) => {
    table.increments('id');
    table.integer('tourId').unsigned().notNullable();
    table.foreign('tourId').references('tours.id').onDelete('CASCADE');
    table.integer('imageId').unsigned().notNullable();
    table.foreign('imageId').references('images.id').onDelete('CASCADE');
    table.unique(['tourId', 'imageId']);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tours_images');
}
