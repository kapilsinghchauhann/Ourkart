import React, { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import CategoryBar from "./CategoryBar.jsx";
import Footer from "./Footer.jsx";
import MegaMenu from "./MegaMenu.jsx";
import "./MegaMenu.css";
import BeautyFoodToys from "./BeautyFoodToys.jsx";

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
          <BeautyFoodToys />
        </div>
        {/* All other page content like products will go inside this main tag */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
