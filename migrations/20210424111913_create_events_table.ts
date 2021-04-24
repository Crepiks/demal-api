import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('events', (table) => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.text('description').nullable();
    table.double('lat').nullable();
    table.double('lon').nullable();
    table.date('start').nullable();
    table.date('end').nullable();
    table.integer('price').defaultTo(0);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('events');
}
