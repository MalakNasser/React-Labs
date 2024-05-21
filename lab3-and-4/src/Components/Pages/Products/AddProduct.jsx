import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../../../ContextAPIs/ProductsContext.jsx";
import { useParams } from "react-router-dom";
import Navbar from "./ProductsNavbar.jsx";

const AddProduct = () => {
  const { AddProduct, UpdateProduct, GetProduct, cart } =
    useContext(ProductsContext);
  const id = useParams().id;
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: "",
    category: "",
  });

  useEffect(() => {
    if (id) {
      GetProduct(id).then((productData) => {
        setProduct(productData);
      });
    }
  }, [id, GetProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      UpdateProduct(id, product);
      navigate(`/products/${id}`);
      return;
    }
    AddProduct(product);
    navigate("/products");
  };

  return (
    <div>
      <Navbar cart={cart} />
      <h1 className="m-5">
        {id ? `Edit ${product.title}` : "Add New Product"}
      </h1>
      <div className="container d-flex justify-content-center">
        <form onSubmit={handleSubmit}>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Product Title</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="title"
                placeholder="Product Name"
                value={product.title}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Product Description</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="description"
                placeholder="Product Description"
                value={product.description}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Product Price</label>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                name="price"
                placeholder="Product Price"
                value={product.price}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Product Discount</label>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                name="discountPercentage"
                placeholder="Product Discount"
                value={product.discountPercentage}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Product Rating</label>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                name="rating"
                placeholder="Product Rating"
                value={product.rating}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Product Quantity</label>
            </div>
            <div className="col-md-6">
              <input
                type="number"
                className="form-control"
                name="stock"
                placeholder="Product Quantity"
                value={product.stock}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Product Brand</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="brand"
                placeholder="Product Brand"
                value={product.brand}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-md-5">
              <label className="form-label">Product Category</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                name="category"
                placeholder="Product Category"
                value={product.category}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            {id ? "Update" : "Add Product"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
