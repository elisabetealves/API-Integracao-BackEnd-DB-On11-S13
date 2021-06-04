const express = require("express")
const router = express.Router()
const controller = require("../controllers/moviesControlles")

router.get("/", controller.getAll)
router.get("/:id", controller.getById)

router.post("/", controller.createMovie)

router.patch("/:id", controller.updateMovie)

router.delete('/:id', controller.removeMovie)

module.exports = router