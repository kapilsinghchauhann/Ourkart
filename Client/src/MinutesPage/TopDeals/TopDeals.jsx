import { useEffect, useState } from 'react'
import './TopDeals.css'

function TopDeals() {
    const [product, setProduct] = useState(null);

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
        <div>
            <h1>Top Deals you cant miss!!</h1>
            {product ? (

                product.map(product => (
                    <div>
                        <div className="upper">
                            <img src={product.image} alt="" />
                            <div className="rating"></div>
                        </div>
                        <div className="lower">
                            <h1>title</h1>
                            <p>price</p>
                        </div>
                    </div>
                ))


            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default TopDeals
