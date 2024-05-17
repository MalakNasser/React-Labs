import { useState } from "react";
import React from "react";
import style from "../Styles/Slider.module.css";

const Slider = () => {
  const images = ["1.png", "2.png", "3.png", "4.png", "5.png"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const prevImage = () => {
    setCurrentIndex((index) => (index === 0 ? images.length - 1 : index - 1));
  };

  const nextImage = () => {
    setCurrentIndex((index) => (index === images.length - 1 ? 0 : index + 1));
  };

  const play = () => {
    if (!intervalId) {
      const id = setInterval(() => {
        setCurrentIndex((index) =>
          index === images.length - 1 ? 0 : index + 1
        );
      }, 2000);
      setIntervalId(id);
    }
  };

  const stop = () => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  return (
    <div className={`style["slider-container"] mb-4`}>
      <h2 className={style.header}>Slider Component</h2>
      <img
        src={`/images/${images[currentIndex]}`}
        alt="slider"
        className={style["slider-image"]}
      />
      <div className={style["slider-buttons"]}>
        <button
          type="button"
          className={style["slider-button"]}
          onClick={prevImage}
        >
          Previous
        </button>
        <button
          type="button"
          className={style["slider-button"]}
          onClick={nextImage}
        >
          Next
        </button>
        <button type="button" className={style["slider-button"]} onClick={play}>
          Play
        </button>
        <button type="button" className={style["slider-button"]} onClick={stop}>
          Stop
        </button>
      </div>
    </div>
  );
};

export default Slider;
