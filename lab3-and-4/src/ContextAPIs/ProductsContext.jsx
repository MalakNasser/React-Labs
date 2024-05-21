import React, { createContext, useEffect, useMemo, useState } from "react";
import axios from "axios";

const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
  let [products, setProducts] = useState(null);
  let { children } = props;
  let [cart, setCart] = useState(0);

  const GetAllProducts = () => {
    axios
      .get("http://localhost:3001/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const GetProduct = async (id) => {
    try {
      const response = await axios.get(`http://localhost:3001/products/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const AddProduct = (newProduct) => {
    axios
      .post("http://localhost:3001/products", newProduct)
      .then((res) => {
        setProducts([...products, res.data]);
        return res.data;
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  };

  const UpdateProduct = (id, updatedProduct) => {
    axios
      .put(`http://localhost:3001/products/${id}`, updatedProduct)
      .then((res) => {
        setProducts(
          products.map((product) => (product.id === id ? res.data : product))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const DeleteProduct = (id) => {
    axios
      .delete(`http://localhost:3001/products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddToCart = () => {
    setCart((prevCart) => prevCart + 1);
  };

  useEffect(() => {
    GetAllProducts();
  }, []);

  const ContextValue = useMemo(
    () => ({
      products,
      cart,
      GetAllProducts,
      GetProduct,
      AddProduct,
      UpdateProduct,
      DeleteProduct,
      AddToCart,
    }),
    [products, cart]
  );

  return (
    <ProductsContext.Provider value={ContextValue}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
