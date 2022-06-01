import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import "./Slider.css";

export const BtnSlider = ({ moveSlide, direction }) => (
  <div
    className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    onClick={moveSlide}
  >
    {direction === "next" ? <AiOutlineArrowRight /> : <AiOutlineArrowLeft />}
  </div>
);
