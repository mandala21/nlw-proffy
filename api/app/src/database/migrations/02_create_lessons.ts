import knex from "knex";

export async function up(knex: knex) {
    return knex.schema.createTable('lessons',table => {
        table.increments('id').primary()
        table.decimal('value').notNullable()
        //forien keys
        table.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        table.integer('subject_id')
            .notNullable()
            .references('id')
            .inTable('subjects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        //timestamps
        table.timestamp('created_at').defaultTo('now()')
        table.timestamp('updated_at')
    })
}

export async function down(knex: knex) {
    return knex.schema.dropTableIfExists('lessons')
}