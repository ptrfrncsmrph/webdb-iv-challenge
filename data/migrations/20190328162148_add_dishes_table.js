exports.up = function(knex) {
  return knex.schema.createTable("dishes", function(tbl) {
    tbl.increments()
    tbl
      .string("name", 255)
      .notNullable()
      .unique("name")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("dishes")
}
