function Contact() {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto" }}>
      <h1 style={{ textAlign: "center", color: "#1E3A8A" }}>
        Contact Us
      </h1>

      <p style={{ textAlign: "center", fontSize: "18px" }}>
        We'd love to hear from you! Feel free to contact us.
      </p>

      <div
        style={{
          marginTop: "30px",
          background: "#f5f5f5",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <h3>📍 Address</h3>
        <p>Bengaluru, Karnataka, India</p>

        <h3>📞 Phone</h3>
        <p>+91 98765 43210</p>

        <h3>📧 Email</h3>
        <p>support@furnirentstore.com</p>

        <h3>🕒 Working Hours</h3>
        <p>Monday - Saturday : 9:00 AM - 8:00 PM</p>
      </div>

      <h2 style={{ marginTop: "40px" }}>Send Us a Message</h2>

      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "15px",
          marginTop: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Your Name"
          style={{ padding: "12px" }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{ padding: "12px" }}
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          style={{ padding: "12px" }}
        ></textarea>

        <button
          style={{
            background: "#2563EB",
            color: "white",
            border: "none",
            padding: "12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;