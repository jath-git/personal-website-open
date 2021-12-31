import "./work.scss";
import { Card, CardMedia } from "@material-ui/core";
import RESUME from "../../globalConstants.js";

export default function Work({ data, index }) {
  const {
    nameLogo,
    name,
    git,
    src,
    live,
    inResume,
    description,
    date,
    location,
    techStack,
  } = data[index];
  let leftText = "See Source Code";
  let rightText = "Try It Yourself";

  if (!git) {
    leftText = location;

    if (!live) {
      rightText = date;
    }
  }

  return (
    <div className="work">
      <Card>
        <div className={nameLogo ? "logo" : "no-display"}>
          <img src={nameLogo} alt="logo" />
        </div>
        <div className="name">
          <h1>{name}</h1>
        </div>
        <CardMedia
          component="img"
          image={src}
          className={git || live ? "img" : null}
          onClick={() => {
            if (live) {
              live[0] === "#" ? window.location.href = live : window.open(live);
            } else if (git) {
              window.open(git);
            }
          }}
        />
        <div className="content">
          <div className="tech-stack">
            {techStack.map((tech) => (
              <img src={tech} alt="tech" />
            ))}
          </div>
          <div className="description">{description}{inResume ? <span className="ignore"><span className="ignore"> </span>
            <span className="clickable"
              onClick={() => window.open(RESUME, "_blank")}>See resume for more details.
            </span>
          </span> : null}</div>
          <div className={git || live ? "project" : "job"}>
            <div
              className={!git && live ? "no-display" : "display"}
              onClick={() => {
                if (git) window.open(git);
              }}
            >
              {leftText}
            </div>
            <div
              className={git && !live ? "no-display" : "display"}
              onClick={() => {
                if (live) { live[0] === "#" ? window.location.href = live : window.open(live) };
              }}
            >
              {rightText}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
