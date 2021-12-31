import "./home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import RESUME, { NAME } from "../../globalConstants.js";

export default function Intro({ menuOpen }) {
  const homeRef = useRef();

  useEffect(() => {
    init(homeRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      strings: ["DEVELOPER", "LEADER", "DESIGNER", "LEARNER"],
    });
  }, []);

  return (
    <div className={"home " + (menuOpen && "menu-open")} id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="universal/me.jpeg" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="write">
            <h2>Hey There, My Name is</h2>
            <h2>
              <span>{`${NAME[0]} ${NAME[1][0]}.`}</span>
            </h2>
            <h2>
              and I am a <span ref={homeRef}></span>
            </h2>
          </div>
          {RESUME !== null ? <div
            className="btn"
            onClick={() => {
              window.location.href = "#experience";
            }}
          >
            Portfolio
          </div> : null}
        </div>
      </div>
    </div>
  );
}
