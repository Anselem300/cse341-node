const routes = require("express").Router();
const lesson = require("../controllers/lesson1")

routes.get('/', lesson.home)

routes.get('/anselem', lesson.anselem)

routes.get('/john', lesson.john)

module.exports = routes;