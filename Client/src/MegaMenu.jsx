import React, { useState } from "react";
import "./MegaMenu.css";
import { menuData } from "./menuData";

// The MegaMenu component receives the active category from its parent
// and displays the corresponding menu items.
const MegaMenu = ({ activeCategory }) => {
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  // If no category is active, the menu is not shown.
  if (!activeCategory || !menuData[activeCategory]) {
    return null;
  }

  const subcategories = Object.keys(menuData[activeCategory]);

  // Set the first subcategory as active by default when a main category is hovered.
  const currentSubCategory = activeSubCategory || subcategories[0];
  const items = menuData[activeCategory][currentSubCategory] || [];

  return (
    <div className="mega-menu">
      <div className="menu-column">
        <ul>
          {subcategories.map((subcategory) => (
            <li
              key={subcategory}
              className={currentSubCategory === subcategory ? "active" : ""}
              onMouseEnter={() => setActiveSubCategory(subcategory)}
            >
              {subcategory}
              <span className="arrow">&gt;</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="menu-column">
        <h4>More in {currentSubCategory}</h4>
        <ul>
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MegaMenu;
