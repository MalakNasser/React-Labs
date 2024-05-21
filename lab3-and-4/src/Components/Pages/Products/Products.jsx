import React, { useContext } from "react";
import ProductsContext from "../../../ContextAPIs/ProductsContext.jsx";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./ProductsNavbar.jsx";

const Products = () => {
  let { products, DeleteProduct, AddToCart, cart } =
    useContext(ProductsContext);

  return (
    <div>
      <Navbar cart={cart} />
      <div className="container">
        <h1 className="my-4">Products List</h1>
        <div className="row">
          {products ? (
            products.map((prd) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={prd.id}>
                <div className="card h-100">
                  <img
                    src={
                      prd.thumbnail
                        ? prd.thumbnail
                        : "https://source.unsplash.com/random"
                    }
                    className="card-img-top img-fluid"
                    alt="Product Thumbnail"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{prd.title}</h5>
                    <p className="card-text">${prd.price}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => DeleteProduct(prd.id)}
                    >
                      <FontAwesomeIcon icon={faTrashAlt} />{" "}
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => AddToCart()}
                    >
                      <FontAwesomeIcon icon={faCartShopping} />{" "}
                    </button>
                    <Link className="btn btn-dark" to={`/products/${prd.id}`}>
                      See More..
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
