import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Products.css";
import { Link } from "react-router-dom";

function Products({ addToCart }) {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://furniture-api.fly.dev/v1/products?limit=100")
      .then((res) => {
        if (res.data.success) {
          setAllProducts(res.data.data);
          setProducts(res.data.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (category === "all") {
      setProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (p) => p.category.toLowerCase() === category
      );
      setProducts(filtered);
    }
  }, [category, allProducts]);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="dot-spinner">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="products-page">
      <div className="products-nav">
        {["all", "garden", "matress", "lamp", "mirror", "wardrove", "tv table"].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={category === cat ? "active" : ""}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <h2 className="products-title">Modern Furniture</h2>

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
    </div>
  );
}

export default Products;
