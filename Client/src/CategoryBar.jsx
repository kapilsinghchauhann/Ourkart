import "./CategoryBar.css";

export default function CategoryBar() {
  return (
    <div className="category-bar">
      <div className="category-item">
        <img src="/src/assets/minutes.webp" alt="Minutes" />
        <span>Minutes</span>
      </div>
      <div className="category-item">
        <img src="/src/assets/mobiles.png" alt="Mobiles & Tablets" />
        <span>Mobiles & Tablets</span>
      </div>
      <div className="category-item">
        <img src="/src/assets/Fashion.webp" alt="Fashion" />
        <span>Fashion</span>
      </div>
      <div className="category-item">
        <img src="/src/assets/Electronics.webp" alt="Electronics" />
        <span>Electronics</span>
      </div>
      <div className="category-item">
        <img src="/src//assets/Home&Furniture.jpg" alt="Home & Furniture" />
        <span>Home & Furniture</span>
      </div>
      <div className="category-item">
        <img src="/src/assets/Tv&Appliances.jpg" alt="TVs & Appliances" />
        <span>TVs & Appliances</span>
      </div>
      <div className="category-item">
        <img src="/src/assets/Flight Booking.png" alt="Flight Bookings" />
        <span>Flight Bookings</span>
      </div>
      <div className="category-item">
        <img src="/src/assets/Beauty.png" alt="Beauty, Food" />
        <span>Beauty, Food..</span>
      </div>
      <div className="category-item">
        <img src="/src/assets/Grocery.png" alt="Grocery" />
        <span>Grocery</span>
      </div>
    </div>
  );
}
