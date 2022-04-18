import { useState } from "react";

import "./App.css";
import "./styles/header.css";
import "./styles/mainImage.css";
import "./styles/statistics.css";
import Header from "./components/Header";
import MainImage from "./components/MainImage";
import Cards from "./components/Cards";

function App() {
  const [navMenuOpen, setNavMenuOpen] = useState(false);
  const toggleNavMenu = () => {
    if (!navMenuOpen) {
      document.querySelector(".headerNav")?.classList.remove("menuClose");
      document.querySelector(".headerNav")?.classList.add("menuOpen");
    } else {
      document.querySelector(".headerNav")?.classList.remove("menuOpen");
      document.querySelector(".headerNav")?.classList.add("menuClose");
    }
    setNavMenuOpen(!navMenuOpen);
  };

  return (
    <div className="App">
      <Header toggleNavMenu={toggleNavMenu} navMenuOpen={navMenuOpen} />
      <main>
        <MainImage />
        <Cards />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
