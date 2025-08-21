import React from "react";
import "./BeautyFoodToys.css";

// Product data is stored in an array of objects for easy management.
const products = [
  {
    imgSrc:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/action-figure/l/2/r/6-batman-dark-knight-dc-comics-super-hero-pvc-action-figure-original-imagg92chxzhp9v2.jpeg?q=70",
    description: "Best of Action Toys",
    offer: "Up to 70% Off",
  },
  {
    imgSrc:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/remote-control-toy/g/y/y/crawling-remote-control-rock-crawler-rc-monster-truck-4-wheel-original-imagz2h6k6ztbzex.jpeg?q=70",
    description: "Remote Control Toys",
    offer: "Up to 80% Off",
  },
  {
    imgSrc:
      "https://rukminim1.flixcart.com/image/200/200/l3dcl8w0/pencil/h/i/p/srx-gold-10-pencils-1-eraser-1-sharpener-flair-original-imageg4k9g9jgbzy.jpeg?q=70",
    description: "Top Selling Stationery",
    offer: "From ₹49",
  },
  {
    imgSrc:
      "https://rukminim1.flixcart.com/image/200/200/kz5vjbk0/stuffed-toy/q/r/q/for-someone-special-best-gift-for-girlfriend-and-boyfriend-90-original-imagb8g3vfwje7h2.jpeg?q=70",
    description: "Soft Toys",
    offer: "Upto 70% Off",
  },
  {
    imgSrc:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/nut-dry-fruit/p/z/m/-original-imaghz7gqgthsr2u.jpeg?q=70",
    description: "Dry Fruits",
    offer: "Upto 75% Off",
  },
  {
    imgSrc:
      "https://rukminim1.flixcart.com/image/200/200/xif0q/cycle/s/k/i/beast-26t-with-front-suspension-dual-disc-brake-26-east-man-original-imaghq27fmekaxmp.jpeg?q=70",
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
