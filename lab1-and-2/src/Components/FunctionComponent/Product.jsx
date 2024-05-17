import React from "react";
import styles from "../../Styles/Product.module.css";

const Product = ({ title, description, brand, category, thumbnail }) => {
  return (
    <div className={styles.card}>
      <img className={styles.thumbnail} src={thumbnail} alt={title} />
      <div className={styles.body}>
        <h5 className={styles.cardTitle}>{title}</h5>
        <p className={styles.cardText}>{description}</p>
        <p className={styles.cardText}>
          <strong>Brand:</strong> {brand}
        </p>
        <p className={styles.cardText}>
          <strong>Category:</strong> {category}
        </p>
      </div>
    </div>
  );
};

export default Product;
