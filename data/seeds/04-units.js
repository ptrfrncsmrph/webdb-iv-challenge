exports.seed = function(knex) {
  return knex("units").insert([
    { name: "cup", short: "C", system: "Imperial" },
    { name: "teaspoon", short: "tsp", system: "Imperial" },
    { name: "tablespoon", short: "Tsp", system: "Imperial" },
    { name: "ounce", short: "oz", system: "Imperial" },
    { name: "pound", short: "lb", system: "Imperial" }
  ])
}
