import Header from "../Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Cart.css";
import { Link, useLocation } from "react-router-dom";

const Cart = () => {
  const location = useLocation();
  const { cartItems } = location.state || { cartItems: [] };

  return (
    <div>
      <Header />
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <div className="empty-cart-image">
            <img
              src="src\MinutesPage\5d6b5ae2-7337-4b83-a884-5a0e9022ac93.webp"
              alt="Empty basket"
            />
          </div>
          <h2 className="empty-cart-title">No items here!</h2>
          <p className="empty-cart-subtitle">
            Shop now & get it delivered in minutes
          </p>
          <Link to="/MinutesPage">
            <button className="empty-cart-btn">Explore Minutes</button>
          </Link>
        </div>
      ) : (
        <div className="cart-container">
          <h2>Your Cart</h2>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <p>{item.title}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: ${item.price}</p>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h3>
              Total: $
              {cartItems
                .reduce((total, item) => total + item.price * item.quantity, 0)
                .toFixed(2)}
            </h3>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Cart;
