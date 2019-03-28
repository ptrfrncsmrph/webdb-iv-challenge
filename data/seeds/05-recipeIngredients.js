exports.seed = function(knex) {
  return knex("recipeIngredients").insert([
    { amount: 4.5, unit_id: 1, ingredient_id: 2, recipe_id: 1 },
    { amount: 2, unit_id: 2, ingredient_id: 3, recipe_id: 1 },
    { amount: 3, unit_id: 3, ingredient_id: 4, recipe_id: 1 },
    { amount: 2, unit_id: 2, ingredient_id: 1, recipe_id: 2 },
    { amount: 2, unit_id: 1, ingredient_id: 2, recipe_id: 2 },
    { amount: 2, unit_id: 3, ingredient_id: 2, recipe_id: 3 },
    { amount: 1.5, unit_id: 1, ingredient_id: 3, recipe_id: 3 },
    { amount: 3, unit_id: 4, ingredient_id: 4, recipe_id: 3 },
    { amount: 4, unit_id: 5, ingredient_id: 5, recipe_id: 4 },
    { amount: 1.5, unit_id: 1, ingredient_id: 1, recipe_id: 5 },
    { amount: 2, unit_id: 2, ingredient_id: 2, recipe_id: 5 },
    { amount: 2, unit_id: 4, ingredient_id: 3, recipe_id: 6 },
    { amount: 2, unit_id: 2, ingredient_id: 5, recipe_id: 6 },
    { amount: 5, unit_id: 1, ingredient_id: 2, recipe_id: 7 },
    { amount: 12, unit_id: 5, ingredient_id: 3, recipe_id: 7 }
  ])
}
