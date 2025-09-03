import { useEffect, useState } from 'react'
import './TopDeals.css'

function TopDeals() {
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(0);

    async function GetProduct() {
        const url = "https://fakestoreapi.com/products?limit=5";
        let resp = await fetch(url); // ✅ pass string, not object
        let data = await resp.json();
        console.log(data);
        setProduct(data);
    }

    useEffect(() => {
        GetProduct();
    }, []);

    return (
        <div className='heading'>
            <h1>Top Deals you cant miss!!</h1>
            <div className='uppermain'>
                {product ? (
                    product.map(product => (
                        <div className='mainab'>
                            <img src={product.image} alt="product image" />

                            {quantity === 0 ? (
                                <button className="add-btn" onClick={() => setQuantity(1)}>
                                    +
                                </button>
                            ) : (
                                <div className="quantity-control">
                                    <button onClick={() => setQuantity(quantity - 1)}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
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
                    ))


                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}

export default TopDeals
