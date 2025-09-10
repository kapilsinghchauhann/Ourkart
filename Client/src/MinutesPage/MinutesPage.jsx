import { useState } from "react";
import Footer from "../Components/Footer/Footer.jsx";
import Header from "./Header/Header.jsx";
import ImgCom from "./ImgCom/ImgCom.jsx";
import "./MinutesPage.css";
import TopDeals from "./TopDeals/TopDeals.jsx";

function MinutesPage() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((item) => item.id === product.id);
      if (itemExists.quantity === 1) {
        return prevItems.filter((item) => item.id !== product.id);
      } else {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  const getCartCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="page">
      <Header cartCount={getCartCount()} cartItems={cartItems} />
      <div className="main w-3/4  bg-gray-300">
        <ImgCom />
        <TopDeals
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
          cartItems={cartItems}
        />
      </div>
      <Footer />
    </div>
  );
}

export default MinutesPage;
