import { createStore, applyMiddleware } from "redux";
import RecipeReducer from "./Reducers/RecipesReducers";
import { thunk } from "redux-thunk";

const store = createStore(RecipeReducer, applyMiddleware(thunk));
export default store;
