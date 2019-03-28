exports.up = function(knex) {
  return knex.schema.createTable("recipes", function(tbl) {
    tbl.increments()
    tbl.string("name", 255).notNullable()
    // I don't know what limit to put on this
    tbl.string("instructions", 511).notNullable()
    tbl
      .integer("dish_id")
      .notNullable()
      .references("id")
      .inTable("dishes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipes")
}
