import Particles from "react-tsparticles";

const options = {
  background: {
    color: "#303030",
  },
  fullScreen: {
    enable: true,
  },
  particles: {
    links: {
      distance: 145,
      enable: true,
    },
    move: {
      enable: true,
    },
    size: {
      value: 1,
    },
    shape: {
      type: "square",
    },
  },
};

const Background = () => {
  return <Particles className="particles" options={options} />;
};

export default Background;
