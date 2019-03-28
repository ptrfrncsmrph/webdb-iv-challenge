exports.seed = function(knex) {
  return knex("dishes").insert([
    { name: "Tacos" },
    { name: "Pizza" },
    { name: "Molé" }
  ])
}
