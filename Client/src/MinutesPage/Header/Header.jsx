import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../CartContext";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, isLoggedIn, handleLogout} = useCart(); // ✅ only from context

  // 👇 calculate total quantity
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <header className="header">
      <nav className="header-nav">
        <div className="header-top">
          {/* Logo */}
          <Link to="/MinutesPage" className="logo">
            <img
              src="src/MinutesPage/fkheaderlogo_minutes_desktop-bc73ae.svg"
              alt="LOGO"
            />
          </Link>

          {/* Search Bar */}
          <div className="search-bar">
            <span className="search-icon">
              <SearchIcon />
            </span>
            <input type="text" placeholder="Search in Flipkart Minutes" />
          </div>

          {/* Right Nav */}
          <div className="nav-links">
            {/* <Link to="/Login" className="nav-link">
              <LoginIcon /> <span>Login</span>
            </Link> */}

              {isLoggedIn ? (
                <button className="mobile-link" onClick={handleLogout}>
                  <LoginIcon /> <span>Logout</span>
                </button>
              ) : (
                <Link to="/Login" className="mobile-link">
                  <LoginIcon /> <span>Login</span>
                </Link>
              )}

              <Link to="/Cart" className="nav-link">
                <CartIcon />
                <span>Cart</span>
                {totalQuantity > 0 && (
                  <span className="cart-badge">{totalQuantity}</span>
                )}
              </Link>

              <button className="nav-link nav-more">
                <MoreIcon />
              </button>
              <Link to="/" className="nav-special">
                <BackArrowIcon /> <span>FLIPKART</span>
              </Link>
            </div>

            {/* Mobile Button */}
            <button
              className="menu-button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>

          {/* Mobile Search */}
          <div className="mobile-search">
            <span className="search-icon">
              <SearchIcon />
            </span>
            <input type="text" placeholder="Search..." />
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="mobile-menu">
              <Link to="/Login" className="mobile-link">
                <LoginIcon /> <span>Login</span>
              </Link>
              <Link to="/Cart" className="mobile-link">
                <CartIcon /> <span>Cart</span>
                {totalQuantity > 0 && (
                  <span className="cart-badge">{totalQuantity}</span>
                )}
              </Link>
              <Link to="/" className="mobile-link">
                <BackArrowIcon /> <span>Back to FLIPKART</span>
              </Link>
            </div>
          )}
      </nav>
    </header>
  );
}

// SVG Icon Components (remain the same)

// SVG Icon Components
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const LoginIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

const CartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const MoreIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
    />
  </svg>
);

const BackArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

const MenuIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);
