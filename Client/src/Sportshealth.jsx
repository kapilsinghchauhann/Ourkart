import React from "react";
import "./Sportshealth.css";

// import actionToysImage from "ClientpublicBestofaction.jpeg";

// Product data is stored in an array of objects for easy management.
const products = [
  {
    imgSrc: "Puzzles.jpeg",
    description: "Puzzles & Cubes",
    offer: "From ₹79",
  },
  {
    imgSrc: "Musicaltoys.jpeg",
    description: "Musical Toys",
    offer: "Under 199",
  },
  {
    imgSrc: "Teapowder.jpeg",
    description: "Tea Powder",
    offer: "Upto 75% off",
  },
  {
    imgSrc: "Breakfastcereals.jpeg",
    description: "Breakfast Cereals",
    offer: "Upto 75% Off",
  },
  {
    imgSrc: "Learning&edu.jpeg",
    description: "Learning &Educational Games",
    offer: "Upto 80% Off",
  },
  {
    imgSrc: "Honey.jpeg",
    description: "Honey",
    offer: "Up to 75% Off",
  },
];

export default function Sportshealth() {
  return (
    <div className="product-section-container">
      <div className="product-section-header">
        <h1>Sports, Healthcare & more</h1>
        <button className="view-all-button">&gt;</button>
      </div>
      <div className="product-card-holder">
        {/* We map over the products array to create a card for each item. */}
        {products.map((product, index) => (
          <a href="#" className="product-card-link" key={index}>
            <div className="product-card">
              <div className="product-image-container">
                <img src={product.imgSrc} alt={product.description} />
              </div>
              <p className="product-description">{product.description}</p>
              <h2 className="product-offer">{product.offer}</h2>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
