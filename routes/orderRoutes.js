import express from "express";
import { createOrder, getOrderById } from "../controllers/orderController.js";

const router = express.Router();

// POST /api/orders — Create a new order
router.post("/", createOrder);

// GET /api/orders/:id — Fetch order by ID
router.get("/:id", getOrderById);

export default router;
