class Skill {
  constructor(type, level) {
    this.type = type;
    this.level = level.toString();
  }
}

const colors = {
  title: {
    text: "white",
    background: "#444444",
    width: "100%",
  },
  bar: {
    hue: 200,
    saturation: 5,
    level: {
      minimum: 50,
      maximum: 80,
    },
  },
};

const languages = [
  new Skill('JavaScript', 95),
  new Skill('Java', 95),
  new Skill('C++', 95),
  new Skill('HTML/CSS', 95),
  new Skill('Python', 90),
  new Skill('Racket', 90),
];

export { colors, languages };