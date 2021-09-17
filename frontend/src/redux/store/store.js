import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import recipeReducer from "../reducers/recipeReducer";
import userReducer from "../reducers/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
  recipe: recipeReducer,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
