import { useState } from "react";

import "./App.css";
import "./styles/header.css";
import "./styles/mainImage.css";
import "./styles/statistics.css";
import Header from "./components/Header";
import MainImage from "./components/MainImage";

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
        <article className="statistics">
          <div className="infoCardsContainer">
            <div className="infoCard card-1">
              <h3 className="infoCardHeader">Some Statistic</h3>
              <p>A description of the statistic</p>
            </div>
            <div className="infoCard card-2">
              <h3 className="infoCardHeader">Some Statistic</h3>
              <p>A description of the statistic</p>
            </div>
            <div className="infoCard card-3">
              <h3 className="infoCardHeader">Some Statistic</h3>
              <p>A description of the statistic</p>
            </div>
            <div className="infoCard card-4">
              <h3 className="infoCardHeader">Some Statistic</h3>
              <p>A description of the statistic</p>
            </div>
          </div>
        </article>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
