import { useState } from "react";

import "./App.css";
import "./styles/header.css";
import Header from "./components/Header";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const toggleNavMenu = () => {
    if (!navMenuOpen) {
      document.querySelector(".App")?.classList.remove("menuClose");
      document.querySelector(".App")?.classList.add("menuOpen");
    } else {
      document.querySelector(".App")?.classList.remove("menuOpen");
      document.querySelector(".App")?.classList.add("menuClose");
    }
    setNavMenuOpen(!navMenuOpen);
  };

  return (
    <div className="App">
      <div className="menuShade fadeOut" onClick={() => toggleNavMenu()}></div>
      <Header toggleNavMenu={toggleNavMenu} navMenuOpen={navMenuOpen} />
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
