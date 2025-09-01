import React, { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header.jsx";
import CategoryBar from "./Home/CategoryBar/CategoryBar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import MegaMenu from "./Home/MegaMenu/MegaMenu.jsx";
import Component2 from "./Home/Component2/Component2.jsx";
import BestElectronic from "./Home/BestElectronic/BestElectronic.jsx";
import BeautyFoodToys from "./Home/BeautyFoodToys/BeautyFoodToys.jsx";
import Sportshealth from "./Home/SportsHealth/Sportshealth.jsx";
import ProductGrid from "./Home/ProductGrid/ProductGrid.jsx";

function App() {
  // This state will track which category is being hovered over.
  const [activeCategory, setActiveCategory] = useState(null);

  // This function will be passed to the CategoryBar.
  const handleCategoryHover = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        {/* Pass the hover handler to the CategoryBar */}
        <div onMouseLeave={() => setActiveCategory(null)}>
          <CategoryBar onCategoryHover={handleCategoryHover} />
          <div className="mega-menu-container">
            <MegaMenu activeCategory={activeCategory} />
          </div>
          <Component2 />
          <BestElectronic />
          <BeautyFoodToys />
          <Sportshealth />
          <ProductGrid />
        </div>
        {/* All other page content like products will go inside this main tag */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
