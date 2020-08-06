import knex from "knex";

export async function up(knex: knex) {
    return knex.schema.createTable('lesson_schedules',table => {
        table.increments('id').primary()
        table.integer('day_week').notNullable()
        table.integer('from').notNullable()
        table.integer('to').notNullable()
        //forien keys
        table.integer('lesson_id')
            .notNullable()
            .references('id')
            .inTable('lessons')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        //timestamps
        table.timestamp('created_at').defaultTo('now()')
        table.timestamp('updated_at')
    })
}

export async function down(knex: knex) {
    return knex.schema.dropTableIfExists('lesson_schedules')
}