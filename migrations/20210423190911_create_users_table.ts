import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('firstName', 255).notNullable();
    table.string('lastName', 255).notNullable();
    table.string('email', 255).notNullable().unique();
    table.timestamp('emailConfirmedAt').nullable().defaultTo(null);
    table.string('password', 255).notNullable();
    table.string('selfEmployedId', 255).nullable().defaultTo(null);
    table.timestamp('createdAt').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('users');
}
