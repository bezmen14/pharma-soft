import { GET_RECIPE, ADD_ONERECIPE } from "../types/recipeTypes";
import axios from "axios";

export function setAll(value) {
  return {
    type: GET_RECIPE,
    payload: value
  }
}

export function createRecipe(value) {
  return {
    type: ADD_ONERECIPE,
    payload: value
  }
}


export const getAllRecipes = () => async (dispatch) => {
  const recipes = await axios('http://127.0.0.1:3001/api/v1/recipe');
  dispatch(setAll(recipes.data))
}

export const addOneRecipe = (series, number, patient, preparation) => async (dispatch) => {
  const oneRecipe = await axios.post('http://127.0.0.1:3001/api/v1/recipe', { series, number, patient, preparation })
  dispatch(createRecipe(oneRecipe.data))
}
