
exports.up = knex => knex.schema.createTable("dishes", table => {

    table.increments("id")
    table.text("name")
    table.text("category")
    table.text("description")
    table.real("price").notNullable()
    table.text("avatar").nullable()
    table.timestamp("created_at").default(knex.fn.now())
    table.timestamp("updated_at").default(knex.fn.now())
    
})


exports.down = knex => knex.schema.dropTable("dishes")