import React, { useState } from "react";
import Slider from "./Components/Slider";
import Quotes from "./Components/ClassComponent/Quotes";
import "./App.css";
import Products from "./Components/FunctionComponent/Products";

function App() {
  const [activeComponent, setActiveComponent] = useState(null);

  const showActiveComponent = () => {
    switch (activeComponent) {
      case "slider":
        return <Slider />;
      case "classComponent":
        return <Quotes />;
      case "functionComponent":
        return <Products />;
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="button-row">
        <button
          type="button"
          className={`nav-button ${
            activeComponent === "slider" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("slider")}
        >
          Slider
        </button>
        <button
          type="button"
          className={`nav-button ${
            activeComponent === "classComponent" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("classComponent")}
        >
          Class Component
        </button>
        <button
          type="button"
          className={`nav-button ${
            activeComponent === "functionComponent" ? "active" : ""
          }`}
          onClick={() => setActiveComponent("functionComponent")}
        >
          Function Component
        </button>
      </div>

      <div className="component-container">{showActiveComponent()}</div>
    </div>
  );
}

export default App;
