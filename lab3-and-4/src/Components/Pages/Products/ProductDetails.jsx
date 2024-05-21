import React, { useContext, useEffect, useState } from "react";
import ProductsContext from "../../../ContextAPIs/ProductsContext.jsx";
import { Link, useParams } from "react-router-dom";
import Navbar from "./ProductsNavbar.jsx";

const ProductDetails = () => {
  let { GetProduct, AddToCart, cart } = useContext(ProductsContext);
  const id = useParams().id;
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    const productData = await GetProduct(id);
    setProduct(productData);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      <Navbar cart={cart} />
      <div className="container mt-5">
        {product ? (
          <div className="row">
            <div className="col-lg-6 mt-5 mb-2">
              {product.thumbnail ? (
                <img
                  src={product.thumbnail}
                  className="img-fluid mb-4"
                  alt={product.title}
                />
              ) : (
                <p>No images available</p>
              )}
              <div className="row">
                {product.images && product.images.length > 0 ? (
                  product.images.map((image, index) => (
                    <div className="col-3 mb-5" key={index}>
                      <img
                        src={image}
                        className="img-fluid"
                        alt={`${product.title} Image ${index + 1}`}
                        style={{ height: "150px", objectFit: "cover" }}
                      />
                    </div>
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </div>
            <div className="col-lg-6">
              <h1>{product.title}</h1>
              <p className="text-muted">{product.description}</p>
              <p>Price: ${product.price}</p>
              <p>Discount: {product.discountPercentage}%</p>
              <p>Rating: {product.rating}</p>
              <p>Stock: {product.stock}</p>
              <p>Brand: {product.brand}</p>
              <p>Category: {product.category}</p>
              <button
                className="btn btn-primary m-2"
                onClick={() => {
                  AddToCart();
                }}
              >
                Add to Cart
              </button>
              <Link className="btn btn-primary" to={`/products/${id}/edit`}>
                Edit Product
              </Link>
            </div>
          </div>
        ) : (
          <p>Loading product details...</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
