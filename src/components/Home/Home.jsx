import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "../Slider/Slider";
import { FaTruck, FaUndoAlt, FaHeadphonesAlt, FaCreditCard } from "react-icons/fa";
import "./home.css";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://furniture-api.fly.dev/v1/products?limit=100")
      .then((res) => {
        if (res.data.success) {
          setProducts(res.data.data.slice(0, 8)); 
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Slider />

      <section className="features-section">
        <div className="feature-card">
          <FaTruck size={30} color="#e91e63" />
          <div>
            <h4>Free Delivery</h4>
            <p>Worldwide</p>
          </div>
        </div>

        <div className="feature-card">
          <FaUndoAlt size={30} color="#e91e63" />
          <div>
            <h4>Money Returns</h4>
            <p>30 Days money return</p>
          </div>
        </div>

        <div className="feature-card">
          <FaHeadphonesAlt size={30} color="#e91e63" />
          <div>
            <h4>24/7 Online Support</h4>
            <p>Customer Support</p>
          </div>
        </div>

        <div className="feature-card">
          <FaCreditCard size={30} color="#e91e63" />
          <div>
            <h4>Payment Security</h4>
            <p>Safe Payment</p>
          </div>
        </div>
      </section>

      <section className="products-section">
        <h2 className="products-title">Exclusive Furniture</h2>

        <div className="products-grid">
          {products.map((p) => (
            <div className="product-card" key={p.id}>
              <Link to={`/product/${p.id}`} state={{ product: p }}>
                <img src={p.image_path} alt={p.name} />
                <h3>{p.name}</h3>
                <p className="price">${p.discount_price || p.price}</p>
              </Link>
              <button
                className="add-cart-btn"
                onClick={() =>
                  addToCart({
                    id: p.id,
                    name: p.name,
                    price: p.discount_price || p.price,
                    image_path: p.image_path,
                  })
                }
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
