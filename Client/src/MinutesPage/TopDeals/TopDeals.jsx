import { useEffect, useState } from "react";
import "./TopDeals.css";
import { useCart } from "../../CartContext";

function TopDeals() {
  const [products, setProducts] = useState([]);
  const { cartItems, addToCart, removeFromCart } = useCart();

  useEffect(() => {
    const getProducts = async () => {
      const resp = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await resp.json();
      setProducts(data);
    };
    getProducts();
  }, []);

  const getProductQuantity = (productId) => {
    const item = cartItems.find((p) => p.id === productId);
    return item ? item.quantity : 0;
  };

  return (
    <div className="heading">
      <h1>Top Deals you can't miss!!</h1>
      <div className="uppermain">
        {products.length > 0 ? (
          products.map((product) => {
            const quantity = getProductQuantity(product.id);
            return (
              <div className="mainab" key={product.id}>
                <img src={product.image} alt={product.title} />

                {quantity === 0 ? (
                  <button className="add-btn" onClick={() => addToCart(product)}>
                    +
                  </button>
                ) : (
                  <div className="quantity-control">
                    <button onClick={() => removeFromCart(product)}>-</button>
                    <span>{quantity}</span>
                    <button onClick={() => addToCart(product)}>+</button>
                  </div>
                )}

                <div className="upperab">
                  <p>{product.rating?.rate} ★</p>
                </div>
                <div className="lowerab">
                  <h4>{product.title}</h4>
                  <p>${product.price}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading…</p>
        )}
      </div>
    </div>
  );
}

export default TopDeals;
