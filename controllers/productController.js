import Product from "../models/Product.js";

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Add a new product
export const addProduct = async (req, res) => {
  const { name, category, price, description, image, stock } = req.body;
  try {
    const newProduct = new Product({
      name,
      category,
      price,
      description,
      image,
      stock,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
