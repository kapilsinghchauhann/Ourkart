import { useEffect, useState } from "react";
import "./TopDeals.css";

function TopDeals({ handleAddToCart, handleRemoveFromCart, cartItems }) {
  const [products, setProducts] = useState(null);

  async function GetProduct() {
    const url = "https://fakestoreapi.com/products?limit=5";
    let resp = await fetch(url);
    let data = await resp.json();
    setProducts(data);
  }

  useEffect(() => {
    GetProduct();
  }, []);

  const getProductQuantity = (productId) => {
    const productInCart = cartItems.find((item) => item.id === productId);
    return productInCart ? productInCart.quantity : 0;
  };

  return (
    <div className="heading">
      <h1>Top Deals you cant miss!!</h1>
      <div className="uppermain">
        {products ? (
          products.map((product) => {
            const quantity = getProductQuantity(product.id);
            return (
              <div className="mainab" key={product.id}>
                <img src={product.image} alt="product image" />

                {quantity === 0 ? (
                  <button
                    className="add-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    +
                  </button>
                ) : (
                  <div className="quantity-control">
                    <button onClick={() => handleRemoveFromCart(product)}>
                      -
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => handleAddToCart(product)}>+</button>
                  </div>
                )}

                <div className="upperab">
                  <p>{product.rating.rate} ★</p>
                </div>
                <div className="lowerab">
                  <h4>{product.title}</h4>
                  <p>{product.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default TopDeals;
