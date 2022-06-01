import React, { useState } from "react";
import "./Slider.css";
import { dataSlider } from "./dataSlider";
import { BtnSlider } from "./BtnSlider";

export const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="container-slider">
      {dataSlider.map(({ id, img }, index) => (
        <div
          key={id}
          className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
        >
          <img src={img} alt="element" />
        </div>
      ))}
      <BtnSlider moveSlide={nextSlide} direction={"next"} />
      <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      <div className="container-dots">
        {Array.from({ length: dataSlider.length }).map((item, index) => (
          <div
            className={slideIndex === index + 1 ? "dot active" : "dot"}
            onClick={() => moveDot(index + 1)}
            key={index}
          ></div>
        ))}
      </div>
    </div>
  );
};
