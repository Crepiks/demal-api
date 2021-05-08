import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tours', (table) => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.text('description').nullable();
    table.float('rating').nullable();
    table.double('lat').nullable();
    table.double('lon').nullable();
    table.string('startingLocation').nullable();
    table.date('start').nullable();
    table.date('end').nullable();
    table.text('equipment').nullable();
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('tours');
}
