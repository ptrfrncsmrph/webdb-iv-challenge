exports.seed = function(knex) {
  return knex("recipes").insert([
    { name: "Granny's", dish_id: 1, instructions: "Mix everything together" },
    { name: "Michoacan", dish_id: 1, instructions: "Mix everything together" },
    { name: "New York", dish_id: 2, instructions: "Mix everything together" },
    { name: "Chicago", dish_id: 2, instructions: "Mix everything together" },
    { name: "Newhaven", dish_id: 2, instructions: "Mix everything together" },
    { name: "Michoacan", dish_id: 3, instructions: "Mix everything together" },
    { name: "Oaxaca", dish_id: 3, instructions: "Mix everything together" }
  ])
}
