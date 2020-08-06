import knex from "knex";

export async function up(knex: knex) {
    return knex.schema.createTable('subjects',table => {
        table.increments('id').primary()
        table.string('name').notNullable()
        //timestamps
        table.timestamp('created_at').defaultTo('now()')
        table.timestamp('updated_at')
    })
}

export async function down(knex: knex) {
    return knex.schema.dropTableIfExists('subjects')
}