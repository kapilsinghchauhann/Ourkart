import React from "react";
import "./CategoryBar.css";
import { Link } from "react-router-dom";

// The component now accepts a prop `onCategoryHover` to trigger the dropdown.
export default function CategoryBar({ onCategoryHover }) {
  // We've created an array of objects. Each object has the category name and its specific image source.
  // This is a cleaner way to manage the data.
  const categoryData = [
    { name: "Minutes", imgSrc: "/src/assets/minutes.webp", pageSrc:"/MinutesPage" },
    { name: "Mobiles & Tablet ", imgSrc: "/src/assets/mobiles.png", pageSrc:"*" },
    { name: "Fashion", imgSrc: "/src/assets/Fashion.webp", pageSrc:"*" },
    { name: "Electronics", imgSrc: "/src/assets/Electronics.webp", pageSrc:"*" },
    { name: "Home & Furniture", imgSrc: "/src/assets/Home&Furniture.jpg", pageSrc:"*" },
    { name: "TVs & Appliances", imgSrc: "/src/assets/Tv&Appliances.jpg", pageSrc:"*" },
    { name: "Flight Bookings", imgSrc: "/src/assets/Flight Booking.png", pageSrc:"*" },
    { name: "Beauty, Food..", imgSrc: "/src/assets/Beauty.png", pageSrc:"*" },
    { name: "Grocery", imgSrc: "/src/assets/Grocery.png", pageSrc:"*" },
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

          <Link to={category.pageSrc}>
          <img src={category.imgSrc} alt={category.name} />
          <span>{category.name}</span>
          </Link>

        </div>
      ))}
    </div>
  );
}
