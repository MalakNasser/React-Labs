import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getRecipe,
  updateRecipe,
  addRecipe,
} from "../../../Store/Actions/RecipesActions";
import Navbar from "./RecipesNavbar.jsx";

const AddRecipe = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const recipe = useSelector((state) => state.recipe);
  const favorites = useSelector((state) => state.favorites);
  const [newRecipe, setNewRecipe] = useState({
    name: "",
    difficulty: "",
    cuisine: "",
    caloriesPerServing: 0,
    servings: 0,
    mealType: [],
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    ingredients: [],
    instructions: [],
  });

  useEffect(() => {
    if (id) {
      dispatch(getRecipe(id));
      setNewRecipe({
        ...recipe,
        name: recipe.name || "",
        difficulty: recipe.difficulty || "",
        cuisine: recipe.cuisine || "",
        caloriesPerServing: recipe.caloriesPerServing || 0,
        servings: recipe.servings || 0,
        mealType: Array.isArray(recipe.mealType) ? recipe.mealType : [],
        prepTimeMinutes: recipe.prepTimeMinutes || 0,
        cookTimeMinutes: recipe.cookTimeMinutes || 0,
        ingredients: Array.isArray(recipe.ingredients)
          ? recipe.ingredients
          : [],
        instructions: Array.isArray(recipe.instructions)
          ? recipe.instructions
          : [],
      });
    }
  }, [id, dispatch]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "ingredients" ||
      name === "instructions" ||
      name === "mealType"
    ) {
      const newArray = value.split(", ");
      setNewRecipe((prevRecipe) => ({
        ...prevRecipe,
        [name]: newArray,
      }));
    } else {
      setNewRecipe((prevRecipe) => ({
        ...prevRecipe,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      dispatch(updateRecipe(id, newRecipe));
      navigate(`/recipes/${id}`);
    } else {
      dispatch(addRecipe(newRecipe));
      navigate("/recipes");
    }
  };

  return (
    <div>
      <Navbar favorites={favorites} />
      <h1 className="m-5">{id ? `Edit Recipe` : "Add New Recipe"}</h1>
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Recipe Title</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Recipe Name"
                value={newRecipe.name}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Difficulty</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="difficulty"
                placeholder="Difficulty"
                value={newRecipe.difficulty}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Cuisine</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="cuisine"
                placeholder="Cuisine"
                value={newRecipe.cuisine}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Calories per Serving</label>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                name="caloriesPerServing"
                placeholder="Calories per Serving"
                value={newRecipe.caloriesPerServing}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Servings</label>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                name="servings"
                placeholder="Servings"
                value={newRecipe.servings}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Meal Type (comma-separated)</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="mealType"
                placeholder="Meal Type"
                value={newRecipe.mealType.join(", ")}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Prep Time (minutes)</label>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                name="prepTimeMinutes"
                placeholder="Prep Time"
                value={newRecipe.prepTimeMinutes}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Cook Time (minutes)</label>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                name="cookTimeMinutes"
                placeholder="Cook Time"
                value={newRecipe.cookTimeMinutes}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">
                Ingredients (comma-separated)
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="ingredients"
                placeholder="Ingredients"
                value={newRecipe.ingredients.join(", ")}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">
                Instructions (comma-separated)
              </label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="instructions"
                placeholder="Instructions"
                value={newRecipe.instructions.join(", ")}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            {id ? "Update" : "Add Recipe"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
