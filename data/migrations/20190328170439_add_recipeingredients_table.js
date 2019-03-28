exports.up = function(knex) {
  return knex.schema
    .createTable("units", tbl => {
      tbl.increments()
      tbl.string("name").notNullable()
      tbl.string("short").notNullable()
      tbl.string("system").notNullable()
    })
    .createTable("recipeIngredients", function(tbl) {
      tbl.increments()
      tbl.float("amount").notNullable()
      tbl
        .integer("unit_id")
        .notNullable()
        .references("id")
        .inTable("units")
        .onDelete("CASCADE")
        .onUpdate("CASCADE")
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
      tbl.unique(["recipe_id", "ingredient_id"])
    })
}

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("recipeIngredients")
    .dropTableIfExists("units")
}
