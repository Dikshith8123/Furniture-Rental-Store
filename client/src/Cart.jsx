import React, { useState } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const removeItem = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => {
    return (
      sum +
      (item.type === "buy"
        ? Number(item.buyPrice)
        : Number(item.rentPrice))
    );
  }, 0);

  return (
    <div style={{ padding: "30px", maxWidth: "1000px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2 style={{ textAlign: "center" }}>Your cart is empty.</h2>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "20px",
                margin: "20px 0",
                border: "1px solid #ddd",
                padding: "15px",
                borderRadius: "10px",
                alignItems: "center",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "180px",
                  height: "140px",
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
              />

              <div style={{ flex: 1 }}>
                <h2>{item.name}</h2>

                <h3>
                  Type:{" "}
                  <span
                    style={{
                      color: item.type === "buy" ? "blue" : "green",
                    }}
                  >
                    {item.type === "buy" ? "Buy" : "Rent"}
                  </span>
                </h3>

                {item.type === "buy" ? (
                  <h3>Price: ₹{item.buyPrice}</h3>
                ) : (
                  <h3>Price: ₹{item.rentPrice}/month</h3>
                )}

                <button
                  onClick={() => removeItem(index)}
                  style={{
                    background: "red",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          <hr />

          <h2>Total Amount: ₹{total}</h2>

          <Link to="/checkout">
            <button
              style={{
                background: "green",
                color: "white",
                padding: "12px 25px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "20px",
              }}
            >
              Proceed to Checkout
            </button>
          </Link>
        </>
      )}
    </div>
  );
}

export default Cart;