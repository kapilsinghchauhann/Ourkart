import React from "react";
import "./ProductGrid.css";

const gridData = [
  {
    title: "Discounts for you",
    products: [
      {
        imgSrc: "/Lunchboxes.jpeg",
        name: "Lunch Boxes",
        offer: "Min. 50% Off",
        link: "#",
      },
      {
        imgSrc: "/Smartwatches.jpeg",
        name: "Smart Watches",
        offer: "Min. 40% Off",
        link: "#",
      },
      {
        imgSrc: "/Truewireless.jpeg",
        name: "True Wireless",
        offer: "Min. 50% Off",
        link: "#",
      },
      {
        imgSrc: "/Laptopbags.jpeg",
        name: "Laptop Bags",
        offer: "Min. 70% Off",
        link: "#",
      },
    ],
  },
  {
    title: "Top Selection",
    products: [
      {
        imgSrc: "/Waterbottles.jpeg",
        name: "Water Bottles & Flasks",
        offer: "Special offer",
        link: "#",
      },
      {
        imgSrc: "/Hairoil.jpeg",
        name: "Hair Oil",
        offer: "Special Offer",
        link: "#",
      },
      {
        imgSrc: "/Soundbars.jpeg",
        name: "Soundbars",
        offer: "New Collection",
        link: "#",
      },
      {
        imgSrc: "/Hairtreatment.jpeg",
        name: "Hair Treatment",
        offer: "New Range",
        link: "#",
      },
    ],
  },
  {
    title: "Fashion's Top Deals",
    products: [
      {
        imgSrc: "/Women'sDress.jpeg",
        name: "Women's Dress Materials",
        offer: "Min. 50% Off",
        link: "#",
      },
      {
        imgSrc: "/Womansarees.jpeg",
        name: "Women's Sarees",
        offer: "Special offer",
        link: "#",
      },
      {
        imgSrc: "/Men'sSlipper.jpeg",
        name: "Men's Slippers & Flip Flops",
        offer: "Min. 70% off",
        link: "#",
      },
      {
        imgSrc: "/Womenethhnic.jpeg",
        name: "Women Ethnic Sets",
        offer: "Min. 50% Off",
        link: "#",
      },
    ],
  },
];

const ProductGrid = () => {
  return (
    <div className="product-grid-container">
      {gridData.map((section, index) => (
        <div className="product-grid-section" key={index}>
          <div className="product-grid-header">
            <h1>{section.title}</h1>
            <button className="grid-nav-button">&gt;</button>
          </div>
          <div className="product-card-grid">
            {section.products.map((product, pIndex) => (
              <a href={product.link} className="grid-product-card" key={pIndex}>
                <div className="grid-product-image">
                  <img src={product.imgSrc} alt={product.name} />
                </div>
                <h2>{product.name}</h2>
                <p className="product-offer-text">{product.offer}</p>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
