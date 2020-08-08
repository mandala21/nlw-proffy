import knex from "knex";

export async function up(knex: knex) {
    return knex.schema.createTable('users',table => {
        table.increments('id').primary()
        table.string('email').notNullable().unique()
        table.string('name').notNullable()
        table.string('phone').notNullable().unique()
        table.text('bio').notNullable()
        table.text('avatar').notNullable()
        //timestamps
        table.timestamp('created_at').defaultTo('now()')
        table.timestamp('updated_at')
    })
}

export async function down(knex: knex) {
    return knex.schema.dropTableIfExists('users')
}