import mongoose from "mongoose";
import dotenv from "dotenv";
import Product from "./models/Product.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const products = [
  {
    name: "Royal Velvet Lehenga",
    category: "Lehenga",
    price: 8999,
    description: "Deep maroon velvet lehenga with intricate zardozi embroidery — a timeless festive look.",
    image: "https://example.com/lehenga1.jpg",
    stock: 10,
  },
  {
    name: "Emerald Green Anarkali Set",
    category: "Anarkali",
    price: 7499,
    description: "Elegant floor-length Anarkali with chiffon dupatta and subtle mirror work.",
    image: "https://example.com/anarkali1.jpg",
    stock: 12,
  },
  {
    name: "Pastel Pink Kurti",
    category: "Kurti",
    price: 1899,
    description: "Soft cotton kurti with floral embroidery — perfect for daily elegance.",
    image: "https://example.com/kurti1.jpg",
    stock: 20,
  },
  {
    name: "Ivory Fusion Gown",
    category: "Gown",
    price: 6999,
    description: "A modern fusion gown with Indo-western silhouette and pearl detailing.",
    image: "https://example.com/gown1.jpg",
    stock: 8,
  },
  {
    name: "Red Bridal Lehenga",
    category: "Lehenga",
    price: 12999,
    description: "Classic bridal lehenga with golden threadwork, paired with contrast dupatta.",
    image: "https://example.com/lehenga2.jpg",
    stock: 5,
  },
  {
    name: "Mint Green Sharara Set",
    category: "Kurti",
    price: 4599,
    description: "Light pastel sharara set with gota patti embellishments.",
    image: "https://example.com/sharara1.jpg",
    stock: 9,
  },
  {
    name: "Golden Silk Kidswear Gown",
    category: "Kidswear",
    price: 2999,
    description: "Beautiful silk gown for little girls, with floral lace and matching dupatta.",
    image: "https://example.com/kids1.jpg",
    stock: 15,
  },
  {
    name: "Navy Blue Indo-Western Gown",
    category: "Gown",
    price: 7499,
    description: "Contemporary Indo-Western gown with layered drape and sequins.",
    image: "https://example.com/gown2.jpg",
    stock: 7,
  },
  {
    name: "Lilac Embroidered Anarkali",
    category: "Anarkali",
    price: 5999,
    description: "Flowy georgette Anarkali with thread embroidery and tassel accents.",
    image: "https://example.com/anarkali2.jpg",
    stock: 10,
  },
  {
    name: "Peach Kids Kurti Set",
    category: "Kidswear",
    price: 1999,
    description: "Cotton Kurti set for girls — perfect for summer festivals.",
    image: "https://example.com/kids2.jpg",
    stock: 14,
  },
];

const importData = async () => {
  try {
    await Product.deleteMany();
    await Product.insertMany(products);
    console.log("✅ Data Imported Successfully!");
    process.exit();
  } catch (error) {
    console.error("❌ Error importing data:", error);
    process.exit(1);
  }
};

importData();
