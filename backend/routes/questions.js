const express = require("express");
const routes = express.Router();
const questionController = require("../controller/questions.js");

// routes.get('',)
routes.post("/questions", questionController.saveQuestions);
routes.get("/questions", questionController.getAnswers);

module.exports = routes;
