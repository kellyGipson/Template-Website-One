import { useEffect, useState } from "react";

import "./App.css";
import "./styles/header.css";
import "./styles/mainImage.css";
import "./styles/cards.css";
import "./styles/businessOverview.css";
import "./styles/footer.css";
import Header from "./components/Header";
import MainImage from "./components/MainImage";
import BusinessOverview from "./components/BusinessOverview";
import Cards from "./components/Cards";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    console.log(window.innerHeight, window.innerWidth);
  }, []);

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
      <MainImage />
      <BusinessOverview />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
