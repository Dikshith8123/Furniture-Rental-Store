import { Link } from "react-router-dom";
import hero from "./assets/hero.png";

function Home() {
  return (
    <div>
      {/* Navbar */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          background: "#1E3A8A",
          color: "white",
          padding: "15px 40px",
        }}
      >
        <h2>🏠 FurniRent & Store</h2>

        <div style={{ display: "flex", gap: "20px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Home
          </Link>

          <Link
            to="/furniture"
            style={{ color: "white", textDecoration: "none" }}
          >
            Furniture
          </Link>

          <Link
            to="/about"
            style={{ color: "white", textDecoration: "none" }}
          >
            About
          </Link>

          <Link
            to="/contact"
            style={{ color: "white", textDecoration: "none" }}
          >
            Contact
          </Link>

          <Link
            to="/cart"
            style={{ color: "white", textDecoration: "none" }}
          >
            Cart
          </Link>

          <Link
            to="/login"
            style={{ color: "white", textDecoration: "none" }}
          >
            Login
          </Link>

          <Link
            to="/register"
            style={{ color: "white", textDecoration: "none" }}
          >
            Register
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div style={{ textAlign: "center", padding: "40px" }}>
        <img
          src={hero}
          alt="Hero"
          style={{
            width: "100%",
            maxWidth: "900px",
            borderRadius: "15px",
          }}
        />

        <h1
          style={{
            color: "#1E3A8A",
            marginTop: "20px",
            fontSize: "40px",
          }}
        >
          Welcome to FurniRent & Store
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#555",
            maxWidth: "700px",
            margin: "20px auto",
            lineHeight: "1.8",
          }}
        >
          Rent or Buy premium furniture for your home and office at affordable
          prices. Enjoy stylish living with flexible rental plans and easy
          purchasing options.
        </p>

        <div style={{ marginTop: "20px" }}>
          <Link to="/furniture">
            <button
              style={{
                background: "#2563EB",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "6px",
                cursor: "pointer",
                marginRight: "15px",
              }}
            >
              Shop Now
            </button>
          </Link>

          <Link to="/contact">
            <button
              style={{
                background: "#16A34A",
                color: "white",
                border: "none",
                padding: "12px 25px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Categories */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <h2 style={{ color: "#1E3A8A" }}>Shop by Category</h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginTop: "20px",
          }}
        >
          <button>🛋 Living Room</button>
          <button>🛏 Bedroom</button>
          <button>🍽 Dining</button>
          <button>💡 Lighting</button>
          <button>🖥 Office</button>
          <button>📺 Appliances</button>
        </div>
      </div>

      {/* Why Choose Us */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "60px auto",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h2 style={{ color: "#1E3A8A" }}>Why Choose FurniRent & Store?</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginTop: "30px",
          }}
        >
          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h3>🛒 Buy or Rent</h3>
            <p>Flexible rental plans and affordable purchase options.</p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h3>🚚 Free Delivery</h3>
            <p>Quick and safe doorstep delivery.</p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h3>⭐ Premium Quality</h3>
            <p>Modern, stylish and durable furniture.</p>
          </div>

          <div
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <h3>💳 Secure Payments</h3>
            <p>Easy and secure online payment options.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        style={{
          background: "#1E3A8A",
          color: "white",
          textAlign: "center",
          padding: "20px",
          marginTop: "40px",
        }}
      >
        <h3>🏠 FurniRent & Store</h3>
        <p>Rent • Buy • Comfort</p>
        <p>📍 Bengaluru, Karnataka, India</p>
        <p>📞 +91 98765 43210</p>
        <p>📧 support@furnirentstore.com</p>
        <p>© 2026 FurniRent & Store. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Home;