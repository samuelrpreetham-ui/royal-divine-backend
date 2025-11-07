import express from "express";
import { getProducts, addProduct } from "../controllers/productController.js";

const router = express.Router();

// Get all products
router.get("/", getProducts);

// Add a new product
router.post("/", addProduct);

export default router;
