const router = require("express").Router()

const db = require("../../data/dbConfig")

router.get("/", (_req, res) => {
  db("dishes")
    .catch(err => {
      res.status(500).json(err)
    })
    .then(dishes => {
      res.status(200).json(dishes)
    })
})

router.get("/:id", (req, res) => {
  const { id } = req.params
  db("dishes")
    .where({ id })
    .catch(err => {
      res.status(404).json(err)
    })
    .then(([dish]) => {
      res.status(200).json(dish)
    })
})

// router.get("/:id/students", (req, res) => {
//   const { id } = req.params
//   db("students")
//     .where({ cohort_id: id })
//     .catch(err => {
//       res.status(404).json(err)
//     })
//     .then(students => {
//       res.status(200).json(students)
//     })
// })

router.post("/", (req, res) => {
  const { name } = req.body
  name == null
    ? res.status(400).json({
        message: "Please include a name."
      })
    : db("dishes")
        .insert({ name })
        .catch(_err => {
          res.status(500).json({
            message: "Error inserting dish."
          })
        })
        .then(([id]) => {
          db("dishes")
            .where({ id })
            .catch(_err => {
              res.status(500).json({
                message: "Error retrieving inserted dish."
              })
            })
            .then(([dish]) => {
              res.status(200).json(dish)
            })
        })
})

router.put("/:id", (req, res) => {
  const { id } = req.params
  const { name } = req.body
  name == null
    ? res.status(400).json({
        message: "Please include a name."
      })
    : db("dishes")
        .where({ id })
        .update({ name })
        .catch(_err => {
          res.status(500).json({
            message: "Error updating dish."
          })
        })
        .then(num => {
          num == 0
            ? res.status(404).json({
                message: "Invalid ID."
              })
            : db("dishes")
                .where({ id })
                .catch(_err => {
                  res.status(500).json({
                    message: "Error retrieving inserted dish."
                  })
                })
                .then(([dish]) => {
                  res.status(200).json(dish)
                })
        })
})

router.delete("/:id", (req, res) => {
  const { id } = req.params
  db("dishes")
    .where({ id })
    .del()
    .catch(_err => {
      res.status(500).json({
        message: "Error deleting dish."
      })
    })
    .then(num => {
      num == 0
        ? res.status(404).json({
            message: "Invalid ID."
          })
        : res.status(200).json({
            message: "Dish was deleted"
          })
    })
})

module.exports = router
