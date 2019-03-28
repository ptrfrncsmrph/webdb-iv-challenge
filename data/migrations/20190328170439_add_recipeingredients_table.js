exports.up = function(knex) {
  return knex.schema.createTable("recipeIngredients", function(tbl) {
    tbl.increments()
    tbl.float("amount").notNullable()
    tbl
      .integer("ingredient_id")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
    tbl
      .integer("recipe_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("recipeIngredients")
}
