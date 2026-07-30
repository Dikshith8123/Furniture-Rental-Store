import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Checkout() {
  const navigate = useNavigate();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const total = cart.reduce((sum, item) => {
    return (
      sum +
      (item.type === "buy"
        ? Number(item.buyPrice)
        : Number(item.rentPrice))
    );
  }, 0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = async () => {
    if (!form.name || !form.phone || !form.address) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await axios.post("https://furniture-backend-s9j3.onrender.com/api/orders", {
        customer: form,
        items: cart,
        total,
      });

      localStorage.removeItem("cart");
      navigate("/ordersuccess");
    } catch (err) {
      console.log(err);
      alert("Order failed!");
    }
  };

  return (
    <div
      style={{
        maxWidth: "700px",
        margin: "30px auto",
        padding: "20px",
      }}
    >
      <h1>Checkout</h1>

      <h2>Order Summary</h2>

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{item.name}</h3>

          <p>
            Type:
            <strong>
              {" "}
              {item.type === "buy" ? "Buy" : "Rent"}
            </strong>
          </p>

          <p>
            Price: ₹
            {item.type === "buy"
              ? item.buyPrice
              : `${item.rentPrice}/month`}
          </p>
        </div>
      ))}

      <h2>Total: ₹{total}</h2>

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />

      <input
        type="text"
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />

      <textarea
        name="address"
        placeholder="Delivery Address"
        value={form.address}
        onChange={handleChange}
        rows="4"
        style={{ width: "100%", padding: "10px", margin: "10px 0" }}
      />

      <button
        onClick={placeOrder}
        style={{
          background: "green",
          color: "white",
          border: "none",
          padding: "12px 25px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Place Order
      </button>
    </div>
  );
}

export default Checkout;