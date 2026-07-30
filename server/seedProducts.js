const mongoose = require("mongoose");
require("dotenv").config();

const Product = require("./models/Product");

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("MongoDB Connected");

    await Product.deleteMany();

    await Product.insertMany([
      {
        name: "Luxury Sofa",
        image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg",
        buyPrice: 29999,
        rentPrice: 2500,
        description: "Premium 3-seater luxury sofa"
      },
      {
        name: "Wooden Bed",
        image: "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
        buyPrice: 45000,
        rentPrice: 3500,
        description: "King size wooden bed"
      },
      {
        name: "Dining Table",
        image: "https://images.pexels.com/photos/276583/pexels-photo-276583.jpeg",
        buyPrice: 22000,
        rentPrice: 1800,
        description: "6-seater dining table"
      },
      {
        name: "Office Chair",
        image: "https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg",
        buyPrice: 8000,
        rentPrice: 700,
        description: "Comfortable office chair"
      },
      {
        name: "Coffee Table",
        image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
        buyPrice: 9000,
        rentPrice: 800,
        description: "Modern coffee table"
      },
      {
        name: "Bookshelf",
        image: "https://images.pexels.com/photos/1090638/pexels-photo-1090638.jpeg",
        buyPrice: 12000,
        rentPrice: 900,
        description: "Wooden bookshelf"
      },
      {
        name: "TV Unit",
        image: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg",
        buyPrice: 18000,
        rentPrice: 1500,
        description: "Modern TV cabinet"
      },
      {
        name: "Wardrobe",
        image: "https://images.pexels.com/photos/1648768/pexels-photo-1648768.jpeg",
        buyPrice: 32000,
        rentPrice: 2600,
        description: "Wooden wardrobe"
      },
      {
        name: "Study Table",
        image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg",
        buyPrice: 14000,
        rentPrice: 1200,
        description: "Study table with drawers"
      },
      {
        name: "Recliner Chair",
        image: "https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg",
        buyPrice: 25000,
        rentPrice: 2200,
        description: "Premium recliner chair"
      }
    ]);

    console.log("Products Inserted Successfully");
    process.exit();
  })
  .catch((err) => console.log(err));