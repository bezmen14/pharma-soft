const express = require('express');
const { getAllRecipe, createRecipe } = require('../controllers/recipe.controller');

const router = express.Router();

router.route('/')
  .get(getAllRecipe)
  .post(createRecipe);

const recipeRouterApi = router;

module.exports = recipeRouterApi;
