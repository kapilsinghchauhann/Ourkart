import React from "react";
import "./CategoryBar.css";

// The component now accepts a prop `onCategoryHover` to trigger the dropdown.
export default function CategoryBar({ onCategoryHover }) {
  // We've created an array of objects. Each object has the category name and its specific image source.
  // This is a cleaner way to manage the data.
  const categoryData = [
    { name: "Minutes", imgSrc: "/src/assets/minutes.webp" },
    { name: "Mobiles & Tablet ", imgSrc: "/src/assets/mobiles.png" },
    { name: "Fashion", imgSrc: "/src/assets/Fashion.webp" },
    { name: "Electronics", imgSrc: "/src/assets/Electronics.webp" },
    { name: "Home & Furniture", imgSrc: "/src/assets/Home&Furniture.jpg" },
    { name: "TVs & Appliances", imgSrc: "/src/assets/Tv&Appliances.jpg" },
    { name: "Flight Bookings", imgSrc: "/src/assets/Flight Booking.png" },
    { name: "Beauty, Food..", imgSrc: "/src/assets/Beauty.png" },
    { name: "Grocery", imgSrc: "/src/assets/Grocery.png" },
  ];

  return (
    <div className="category-bar">
      {/* We now map over the `categoryData` array. */}
      {categoryData.map((category) => (
        <div
          key={category.name}
          className="category-item"
          // When the mouse enters, it tells the parent component which category is active.
          onMouseEnter={() => onCategoryHover(category.name)}
        >
          {/* The correct image source and alt text are used for each item. */}
          <img src={category.imgSrc} alt={category.name} />
          <span>{category.name}</span>
        </div>
      ))}
    </div>
  );
}
