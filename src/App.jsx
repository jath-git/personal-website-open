import TopMenu from "./components/topMenu/TopMenu.jsx";
import Home from "./components/home/Home.jsx";
import Skills from "./components/skills/Skills.jsx";
import Experience from "./components/experience/Experience.jsx";
import Contact from "./components/contact/Contact.jsx";
import About from "./components/about/About.jsx";
import SideMenu from "./components/sideMenu/SideMenu";
import "./app.scss";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  window.onkeydown = e => {
    switch (e.key) {
      case 'ArrowLeft':
        setMenuOpen(true);
        break;
      case 'ArrowRight':
        setMenuOpen(false);
        break;
      default:
        return;
    }
  }

  return (
    <div className="app">
      <div className="topbar-back"></div>
      <TopMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections" onClick={() => setMenuOpen(false)}>
        <Home menuOpen={menuOpen} />
        <About setMenuOpen={setMenuOpen} />
        <Skills setMenuOpen={setMenuOpen} />
        <Experience setMenuOpen={setMenuOpen} />
        <Contact setMenuOpen={setMenuOpen} />
      </div>
    </div>
  );
}

export default App;
