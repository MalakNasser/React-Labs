import React, { useState, useEffect } from "react";
import useFetch from "../../Fetch";
import Product from "./Product";
import styles from "../../Styles/Products.module.css";

const Products = () => {
  const { products } = useFetch();
  const [currentPage, setCurrentPage] = useState(1);
  const [activePage, setActivePage] = useState(1);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchWord, setSearchWord] = useState("");
  const productsPerPage = 6;
  const [length, setLength] = useState(
    Math.ceil(products.length / productsPerPage)
  );

  useEffect(() => {
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const filteredProducts =
      selectedCategory === "All"
        ? products
        : products.filter((product) => product.category === selectedCategory);
    const searchedProducts = filteredProducts.filter((product) => {
      return product.title.toLowerCase().includes(searchWord.toLowerCase());
    });
    setCurrentProducts(
      searchedProducts.slice(indexOfFirstProduct, indexOfLastProduct)
    );
    setLength(Math.ceil(searchedProducts.length / productsPerPage));
  }, [currentPage, products, selectedCategory, searchWord]);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    setActivePage(pageNumber);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    setCurrentPage(1);
  };

  const handleSearchChange = (event) => {
    setSearchWord(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <h1 className={styles.header}>Products List</h1>
      <div className={styles.searchCategoryContainer}>
        <div className={styles.searchContainer}>
          <label className={styles.label}>Search</label>
          <input
            type="text"
            placeholder="Search products"
            className={styles.input}
            value={searchWord}
            onChange={handleSearchChange}
          />
        </div>
        <div className={styles.categoryContainer}>
          <label className={styles.label}>Category</label>
          <select
            value={selectedCategory}
            onChange={handleCategoryChange}
            className={styles.select}
          >
            <option value="All">All</option>
            {[...new Set(products.map((product) => product.category))].map(
              (category, index) => (
                <option key={index} value={category}>
                  {category}
                </option>
              )
            )}
          </select>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {currentProducts.map((product) => (
            <div key={product.id} className="col-lg-4 col-md-6 col col-12">
              <Product {...product} />
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          {Array.from({
            length: length,
          }).map((_, index) => (
            <button
              className={`${styles.paginationButton} ${
                activePage === index + 1 ? styles.activePageNumber : ""
              }`}
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
