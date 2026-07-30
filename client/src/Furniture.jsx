import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Furniture() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://furniture-backend-s9j3.onrender.com/api/products");
      setProducts(res.data);
    } catch (error) {
  console.log(error);
  console.log(error.response);
  console.log(error.message);
  alert(error.message);
}
  };

  const addToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(`${product.name} added to cart`);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        Furniture Collection
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "25px",
        }}
      >
        {products.map((product) => (
          <div
            key={product._id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "15px",
              textAlign: "center",
              boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />

            <h2>{product.name}</h2>

            <h3 style={{ color: "green" }}>
              Rent: ₹{product.rentPrice}/month
            </h3>

            <h3 style={{ color: "blue" }}>
              Buy: ₹{product.buyPrice}
            </h3>

            <p>{product.description}</p>

            <p style={{ color: "green", fontWeight: "bold" }}>
              In Stock
            </p>

            <button
              onClick={() => alert("Rent Now")}
              style={{
                marginRight: "10px",
                padding: "8px 15px",
              }}
            >
              Rent Now
            </button>

            <button
              onClick={() => alert("Buy Now")}
              style={{
                padding: "8px 15px",
              }}
            >
              Buy Now
            </button>

            <br />
            <br />

            <button
              onClick={() => addToCart(product)}
              style={{
                padding: "8px 20px",
              }}
            >
              Add to Cart
            </button>

            <br />
            <br />

            <Link to={`/product/${product._id}`}>
              <button
                style={{
                  padding: "8px 20px",
                }}
              >
                View Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Furniture;