import { useState } from "react";
import "./skills.scss";
import Icons from "../icons/Icons.jsx";
import data from "../../data/skillsData.js";

const ICONS_PER_SLIDE = 5;

export default function Skills() {
  const [currentSlide, setCurrentSlide] = useState(0);

  let counter = [];
  for (let i = 0; i < data.length; i += ICONS_PER_SLIDE) {
    counter.push(i);
  }

  const handleClick = (goLeft = false) => {
    if (goLeft) {
      setCurrentSlide(
        currentSlide > 0 ? currentSlide - 1 : data.length / ICONS_PER_SLIDE - 1
      );
    } else {
      setCurrentSlide(
        currentSlide < data.length / ICONS_PER_SLIDE - 1 ? currentSlide + 1 : 0
      );
    }
  };
  
  return (
    <div className="skills" id="skills">
      <div className="header2">Skills</div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {counter.map((i) => (
          <div className="container">
            <div className="items">
              <Icons
                icons={data.slice(i, i + ICONS_PER_SLIDE)}
              />
            </div>
          </div>
        ))}
      </div>
      {data.length > ICONS_PER_SLIDE ?
        <img
          src="assets/arrow.png"
          className="arrow left"
          alt="left-arrow"
          onClick={() => handleClick(true)}
        /> : null}
      {data.length > ICONS_PER_SLIDE ?
        <img
          src="assets/arrow.png"
          className="arrow right"
          alt="right-arrow"
          onClick={() => handleClick(false)}
        /> : null}
    </div>
  );
}
