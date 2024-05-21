import { GET_RECIPES } from "../Actions/RecipesActions";
import { GET_RECIPE } from "../Actions/RecipesActions";
import { ADD_RECIPE } from "../Actions/RecipesActions";
import { DELETE_RECIPE } from "../Actions/RecipesActions";
import { EDIT_RECIPE } from "../Actions/RecipesActions";
import { ADD_TO_FAVORITES } from "../Actions/RecipesActions";

const INITIAL_STATE = {
  favorites: 0,
  recipes: [],
};

export default function usersReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_RECIPES:
      return {
        ...state,
        recipes: action.payload,
      };

    case GET_RECIPE:
      return {
        ...state,
        recipe: action.payload,
      };

    case ADD_RECIPE:
      return {
        ...state,
        recipes: [...state.recipes, action.payload],
      };

    case DELETE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
      };

    case EDIT_RECIPE:
      return {
        ...state,
        recipes: state.recipes.map((recipe) =>
          recipe.id === action.payload.id ? action.payload : recipe
        ),
      };

    case ADD_TO_FAVORITES:
      return {
        ...state,
        favorites: state.favorites + 1,
      };

    default:
      return state;
  }
}
