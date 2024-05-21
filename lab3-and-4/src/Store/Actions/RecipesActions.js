import axios from "axios";

const GET_RECIPES = "GET_RECIPES";
const GET_RECIPE = "GET_RECIPE";
const ADD_RECIPE = "ADD_RECIPE";
const DELETE_RECIPE = "DELETE_RECIPE";
const EDIT_RECIPE = "EDIT_RECIPE";
const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";

export {
  GET_RECIPES,
  GET_RECIPE,
  ADD_RECIPE,
  DELETE_RECIPE,
  EDIT_RECIPE,
  ADD_TO_FAVORITES,
};

const getRecipes = () => (dispatch) => {
  return axios
    .get("http://localhost:3001/recipes")
    .then((res) => {
      dispatch({
        type: GET_RECIPES,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

const getRecipe = (id) => (dispatch) => {
  return axios
    .get(`http://localhost:3001/recipes/${id}`)
    .then((res) => {
      dispatch({
        type: GET_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

const addRecipe = (newRecipe) => (dispatch) => {
  return axios
    .post("http://localhost:3001/recipes", newRecipe)
    .then((res) => {
      dispatch({
        type: ADD_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

const deleteRecipe = (id) => (dispatch) => {
  return axios
    .delete(`http://localhost:3001/recipes/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_RECIPE,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

const updateRecipe = (id, updatedRecipe) => (dispatch) => {
  return axios
    .put(`http://localhost:3001/recipes/${id}`, updatedRecipe)
    .then((res) => {
      dispatch({
        type: EDIT_RECIPE,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

const addToFavorites = () => {
  return {
    type: ADD_TO_FAVORITES,
  };
};

export {
  getRecipes,
  getRecipe,
  addRecipe,
  deleteRecipe,
  updateRecipe,
  addToFavorites,
};
