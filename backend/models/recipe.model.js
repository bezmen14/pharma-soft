const { model, Schema } = require("mongoose");

const recipeSchema = new Schema({
  series: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  patient: {
    type: String,
    required: true,
  },
  preparation: {
    type: String,
    required: true,
  },
});

const RecipeModel = model('Recipe', recipeSchema);

module.exports = RecipeModel;
