import Header from "../Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Cart.css"; // Import the CSS file
import { Link } from 'react-router-dom';

const Cart = () => {
  return (
    <div>
      <Header/>
      <div className="empty-cart">
        {/* Image Section */}
        <div className="empty-cart-image">
          <img
            src="src\MinutesPage\5d6b5ae2-7337-4b83-a884-5a0e9022ac93.webp"
            alt="Empty basket"
          />
        </div>

        {/* Text Section */}
        <h2 className="empty-cart-title">No items here!</h2>
        <p className="empty-cart-subtitle">
          Shop now & get it delivered in minutes
        </p>

        {/* Button */}
        <Link to="/MinutesPage">
        <button className="empty-cart-btn">Explore Minutes</button>
        </Link>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;

