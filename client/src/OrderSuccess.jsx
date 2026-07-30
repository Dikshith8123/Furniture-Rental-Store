import React from "react";
import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1 style={{ color: "green" }}>🎉 Order Placed Successfully!</h1>

      <p>Thank you for choosing our Furniture Rental Store.</p>

      <Link to="/furniture">
        <button
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Continue Shopping
        </button>
      </Link>
    </div>
  );
}

export default OrderSuccess;