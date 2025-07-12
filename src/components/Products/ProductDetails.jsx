import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./ProductDetails.css";

function ProductDetails({ addToCart }) {
  const location = useLocation();
  const { product } = location.state || {};

  if (!product) return <p className="not-found">Product Not Found</p>;

  return (
    <div className="product-details">
      <Link to="/Products" className="back-btn">← Back to Products</Link>

      <div className="details-container">
        <img src={product.image_path} alt={product.name} />

        <div className="info">
          <h1>{product.name}</h1>
          <p className="price">Price: ${product.discount_price || product.price}</p>
          <p className="desc">{product.description}</p>

          <ul className="extra-info">
            <li><strong>Brand:</strong> {product.brand || "N/A"}</li>
            <li><strong>Category:</strong> {product.category}</li>
            <li><strong>Material:</strong> {product.material || "N/A"}</li>
          </ul>

          <button
            className="add-cart-btn"
            onClick={() =>
              addToCart({
                id: product.id,
                name: product.name,
                price: product.discount_price || product.price,
                image_path: product.image_path,
              })
            }
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
