import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./RecipesNavbar.jsx";
import {
  getRecipe,
  addToFavorites,
} from "../../../Store/Actions/RecipesActions";

const RecipeDetails = () => {
  const { id } = useParams();
  const recipe = useSelector((state) => state.recipe);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipe(id));
  }, [dispatch, id]);

  return (
    <div>
      <Navbar favorites={favorites} />
      <div className="container mt-5">
        {recipe ? (
          <div className="row">
            <div className="col-lg-6 mt-5 mb-2">
              {recipe.image ? (
                <img
                  src={recipe.image}
                  className="img-fluid mb-4"
                  alt={recipe.title}
                />
              ) : (
                <p>No images available</p>
              )}
            </div>
            <div className="col-lg-6">
              <h1>{recipe.name}</h1>
              <p className="text-muted">Difficulty: {recipe.difficulty}</p>
              <p>Cuisine: {recipe.cuisine}</p>
              <p>Calories per Serving: {recipe.caloriesPerServing}</p>
              <p>Servings: {recipe.servings}</p>
              <p>Meal Type: {recipe.mealType.join(", ")}</p>
              <p>Prep Time: {recipe.prepTimeMinutes} minutes</p>
              <p>Cook Time: {recipe.cookTimeMinutes} minutes</p>
              <p>Ingredients:</p>
              <ul>
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index} style={{ textAlign: "left" }}>
                    {ingredient}
                  </li>
                ))}
              </ul>
              <p>Instructions:</p>
              <ol>
                {recipe.instructions.map((instruction, index) => (
                  <li key={index} style={{ textAlign: "left" }}>
                    {instruction}
                  </li>
                ))}
              </ol>
              <button
                className="btn btn-primary m-2"
                onClick={() => {
                  dispatch(addToFavorites());
                }}
              >
                Add to Favorites
              </button>
              <Link className="btn btn-primary" to={`/recipes/${id}/edit`}>
                Edit Recipe
              </Link>
            </div>
          </div>
        ) : (
          <p>Loading Recipe details...</p>
        )}
      </div>
    </div>
  );
};

export default RecipeDetails;
