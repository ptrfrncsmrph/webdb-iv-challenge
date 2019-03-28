exports.seed = function(knex) {
  return knex("ingredients").insert([
    { name: "Tomato" },
    { name: "Cheese" },
    { name: "Chocolate" },
    { name: "Onion" },
    { name: "Garlic" }
  ])
}
