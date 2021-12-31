import React, { useState } from "react";
import "./experience.scss";
import experience from "../../data/experienceData.js";
import Work from "../work/Work.jsx";
// import Particles from "../particles/Particles.jsx";

export default function Experience() {
  const [slideIndex, setSlideIndex] = useState(0);

  let data = [];
  for (let i = 0; i < experience.length; ++i) {
    if (experience[i].show) {
      data.push(experience[i]);
    }
  }

  return (
    <div className="experience" id="experience">
      {/* <Particles /> */}
      <div className="header3">Experiences</div>
      <div className="slider-two main">
        {data.map((obj, index) => {
          return (
            <div>
              <div
                key={obj.id}
                className={slideIndex === index ? "active-slide" : "slide"}
              >
                <Work data={data} index={slideIndex} />
              </div>

              {experience.length > 1 ?
                <div className="dots">
                  {Array.from({ length: data.length }).map((discard, index) => (
                    <div
                      onClick={() => {
                        setSlideIndex(index);
                      }}
                      className={slideIndex === index ? "active-dot" : "dot"}
                    ></div>
                  ))}
                </div> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
