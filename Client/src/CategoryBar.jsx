import "./CategoryBar.css";

export default function CategoryBar() {
  return (
    <div className="category-bar">
      <div className="category-item">
        <img src="minutes.png" alt="Minutes" />
        <span>Minutes</span>
      </div>
      <div className="category-item">
        <img src="mobiles.png" alt="Mobiles & Tablets" />
        <span>Mobiles & Tablets</span>
      </div>
      <div className="category-item">
        <img src="fashion.png" alt="Fashion" />
        <span>Fashion</span>
      </div>
      <div className="category-item">
        <img src="electronics.png" alt="Electronics" />
        <span>Electronics</span>
      </div>
      <div className="category-item">
        <img src="furniture.png" alt="Home & Furniture" />
        <span>Home & Furniture</span>
      </div>
      <div className="category-item">
        <img src="tv.png" alt="TVs & Appliances" />
        <span>TVs & Appliances</span>
      </div>
      <div className="category-item">
        <img src="flight.png" alt="Flight Bookings" />
        <span>Flight Bookings</span>
      </div>
      <div className="category-item">
        <img src="beauty.png" alt="Beauty, Food" />
        <span>Beauty, Food..</span>
      </div>
      <div className="category-item">
        <img src="grocery.png" alt="Grocery" />
        <span>Grocery</span>
      </div>
    </div>
  );
}
