const Recipe = require('../models/recipe.model');

const getAllRecipe = async (req, res) => {
  try {
    const allRecipe = await Recipe.find();
    return res.json(allRecipe);
  } catch (error) {
    return res.sendStatus(500);
  }
};

const createRecipe = async (req, res) => {
  try {
    const {
      series, number, patient, preparation
    } = req.body;
    if (series && number && patient && preparation) {
      const newRecipe = await Recipe.create({
        series, number, patient, preparation
      });
      return res.status(201).json(newRecipe);
    }
    return res.sendStatus(406);
  } catch (error) {
    return res.sendStatus(500);
  }
};



module.exports = {
  getAllRecipe,
  createRecipe,
};
