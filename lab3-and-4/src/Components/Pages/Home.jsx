import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mt-5">
      <Link to="/products" className="btn btn-secondary btn-lg m-5">
        View Products
      </Link>
      <Link to="/recipes" className="btn btn-secondary btn-lg m-5">
        View Recipes
      </Link>
    </div>
  );
};

export default Home;
