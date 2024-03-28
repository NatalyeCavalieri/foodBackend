exports.up = function(knex) {
    return knex.schema.dropTableIfExists('users')
      .then(function() {
        return knex.schema.createTable('users', function(table) {
          table.increments("id").primary();
          table.string("name");
          table.string("email");
          table.string("password");
          table.string("avatar").nullable();
          table.enum("role", ["admin", "customer"], {
            useNative: true,
            enumName: "roles",
          }).notNullable().default("customer");
          table.timestamp("created_at").defaultTo(knex.fn.now());
          table.timestamp("updated_at").defaultTo(knex.fn.now());
        });
      });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
  };
  