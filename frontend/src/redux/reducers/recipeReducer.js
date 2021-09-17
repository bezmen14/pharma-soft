import { GET_RECIPE, ADD_ONERECIPE } from "../types/recipeTypes";

function recipeReducer(state = [], action) {
  switch (action.type) {
    case GET_RECIPE:
      return action.payload;

    case ADD_ONERECIPE:
      return [...state, action.payload];

    default:
      return state;
  }
}

export default recipeReducer;
