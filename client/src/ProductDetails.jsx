import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const fetchProduct = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/products/${id}`
      );
      setProduct(res.data);
    } catch (err) {
      console.log(err);
      alert("Failed to load product");
    }
  };

  const addToCart = (type) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push({
      ...product,
      type,
    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(
      `${product.name} added to cart for ${
        type === "rent" ? "Rent" : "Buy"
      }`
    );
  };

  if (!product) {
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "900px",
        margin: "40px auto",
        display: "flex",
        gap: "40px",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        style={{
          width: "400px",
          height: "300px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />

      <div>
        <h1>{product.name}</h1>

        <h2 style={{ color: "green" }}>
          Rent: ₹{product.rentPrice}/month
        </h2>

        <h2 style={{ color: "blue" }}>
          Buy: ₹{product.buyPrice}
        </h2>

        <p>{product.description}</p>

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
          }}
        >
          <button
            onClick={() => addToCart("rent")}
            style={{
              background: "green",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Rent Now
          </button>

          <button
            onClick={() => addToCart("buy")}
            style={{
              background: "blue",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Buy Now
          </button>
        </div>

        <br />

        <Link to="/cart">
          <button
            style={{
              padding: "10px 20px",
              cursor: "pointer",
            }}
          >
            Go to Cart
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetails;