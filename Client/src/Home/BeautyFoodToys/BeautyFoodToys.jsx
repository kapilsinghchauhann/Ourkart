import React from "react";
import "./BeautyFoodToys.css";

// import actionToysImage from "ClientpublicBestofaction.jpeg";

// Product data is stored in an array of objects for easy management.
const products = [
  {
    imgSrc: "/Bestofaction.jpeg",
    description: "Best of Action Toys",
    offer: "Up to 70% Off",
  },
  {
    imgSrc: "/Remotecontrol.jpeg",
    description: "Remote Control Toys",
    offer: "Up to 80% Off",
  },
  {
    imgSrc: "/Topsellingstationary.jpeg",
    description: "Top Selling Stationery",
    offer: "From ₹49",
  },
  {
    imgSrc: "/Softtoys.jpeg",
    description: "Soft Toys",
    offer: "Upto 70% Off",
  },
  {
    imgSrc: "/Dryfruits.jpeg",
    description: "Dry Fruits",
    offer: "Upto 75% Off",
  },
  {
    imgSrc: "/Gearedcycle.jpeg",
    description: "Geared Cycles",
    offer: "Up to 70% Off",
  },
];

export default function BeautyFoodToys() {
  return (
    <div className="product-section-container">
      <div className="product-section-header">
        <h1>Beauty, Food, Toys & more</h1>
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
