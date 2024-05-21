import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-black">
        <div className="container-fluid p-5 pt-0 pb-0">
          <Link className="navbar-brand link-light" aria-current="page" to="/">
            Home
          </Link>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active link-light"
                  aria-current="page"
                  to="/products"
                >
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active link-light"
                  aria-current="page"
                  to="/products/add"
                >
                  Add Product
                </Link>
              </li>
            </ul>
            <h6 className="navbar-brand link-light">Cart: {cart}</h6>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
