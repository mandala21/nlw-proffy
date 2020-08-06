import knex from "knex";

export async function up(knex: knex) {
    return knex.schema.createTable('connections',table => {
        table.increments('id').primary()
        //forieng key
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        //timestamps
        table.timestamp('created_at').defaultTo('now()')
        table.timestamp('updated_at')
    })
}

export async function down(knex: knex) {
    return knex.schema.dropTableIfExists('connections')
}