import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "../Slider/Slider";
import { FaTruck, FaUndoAlt, FaHeadphonesAlt, FaCreditCard } from "react-icons/fa";
import "./home.css";

const Home = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/category/furniture")
      .then((res) => {
        setProducts(res.data.products.slice(0, 3));
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
            <h4>27/4 Online Support</h4>
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
        <h2>Exclusive Products</h2>

        <div className="products-container">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.thumbnail} alt={product.title} />
              <h3>{product.title}</h3>
              <p>${product.price}</p>
              <button
                className="add-cart-btn"
                onClick={() =>
                  addToCart({
                    id: product.id,
                    name: product.title,
                    price: product.price,
                    image_path: product.thumbnail,
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
