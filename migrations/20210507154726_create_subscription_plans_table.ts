import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('subscription_plans', (table) => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.string('description').notNullable();
    table.integer('price').notNullable();
    table.integer('duration').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('subscription_plans');
}
