import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faHeart } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./RecipesNavbar";
import {
  getRecipes,
  deleteRecipe,
  addToFavorites,
} from "../../../Store/Actions/RecipesActions";

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRecipes());
  }, []);
  return (
    <div>
      <Navbar favorites={favorites} />
      <div className="container">
        <h1 className="my-4">Products List</h1>
        <div className="row">
          {recipes ? (
            recipes.map((recipe) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={recipe.id}>
                <div className="card h-100">
                  <img
                    src={
                      recipe.image
                        ? recipe.image
                        : "https://source.unsplash.com/random"
                    }
                    className="card-img-top img-fluid"
                    alt="Product Thumbnail"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{recipe.name}</h5>
                    <p className="card-text">{recipe.cuisine}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => dispatch(deleteRecipe(recipe.id))}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />{" "}
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => dispatch(addToFavorites())}
                    >
                      <FontAwesomeIcon icon={faHeart} />{" "}
                    </button>
                    <Link className="btn btn-dark" to={`/recipes/${recipe.id}`}>
                      See More..
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading Recipes...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Recipes;
