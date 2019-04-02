const db = require("../dbConfig")

const getDishes = () => db("dishes")
const addDish = dish => db("dishes").insert(dish)
const getDish = id => db("dishes").where({ id })
const getRecipes = () => db("recipes")
const addRecipe = recipe => db("recipes").insert(recipe)

module.exports = {
  getDishes,
  addDish,
  getDish,
  getRecipes,
  addRecipe
}
