import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://furniture-backend-s9j3.onrender.com/api/orders")
      .then((res) => setOrders(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>All Orders</h2>

      {orders.length === 0 ? (
        <p style={{ textAlign: "center" }}>No Orders Found</p>
      ) : (
        orders.map((order) => (
          <div
            key={order._id}
            style={{
              border: "1px solid #ccc",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
            }}
          >
            <h3>
              Name: {order.customer?.name || order.name || "N/A"}
            </h3>

            <p>
              <strong>Phone:</strong>{" "}
              {order.customer?.phone || order.phone || "N/A"}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {order.customer?.address || order.address || "N/A"}
            </p>

            <p>
              <strong>Total:</strong> ₹{order.total || 0}
            </p>

            <h4>Items</h4>

            {order.items && order.items.length > 0 ? (
              order.items.map((item, index) => (
                <div
                  key={index}
                  style={{
                    borderTop: "1px solid #eee",
                    paddingTop: "10px",
                    marginTop: "10px",
                  }}
                >
                  <p>
                    <strong>Product:</strong> {item.name}
                  </p>

                  <p>
                    <strong>Type:</strong>{" "}
                    {item.type === "buy" ? "Buy" : "Rent"}
                  </p>

                  <p>
                    <strong>Price:</strong> ₹
                    {item.type === "buy"
                      ? item.buyPrice
                      : item.rentPrice}
                  </p>
                </div>
              ))
            ) : (
              <p>No Items</p>
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default Admin;