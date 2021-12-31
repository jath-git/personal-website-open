import "./about.scss";
// import SkillBar from "react-skillbars";
// import { colors } from "./Skillbar.js";
import { languages } from "../../data/Skillbar.js";
import RESUME from "../../globalConstants.js";
import { PictureAsPdf } from "@material-ui/icons";
import aboutData from "../../data/aboutData.js";

export default function About() {
  return (
    <div className="about" id="about">
      <div className="header1">About Me</div>
      <div className="v-center">
        <div className="left">
          <div className="wrapper">
            <h1 data-text="I am Jathurshan.">I am Jathurshan.</h1>
            {aboutData.map(data => {
              return data;
            })}
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h1 data-text="A Software Enthusiast.">A Software Enthusiast.</h1>
            <div className="container">
              {/* <SkillBar
                className="skillbar"
                colors={colors}
                skills={languages}
              /> */}
              {languages.map((skill) => {
                return (
                  <div className="skillbar-container">
                    <div className="skill">{skill.type}</div>
                    <div className="space">
                      <div className="bar" style={{ width: `${skill.level}%` }}>
                        <div>{skill.level}%</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="final">
              {RESUME ?
                <div
                  className="btn"
                  onClick={() => window.open(RESUME, "_blank")}
                >
                  <PictureAsPdf className="icon" />
                  {"  "} Preview Resume
                </div> : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
