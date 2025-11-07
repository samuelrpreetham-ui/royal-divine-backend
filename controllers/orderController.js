import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const { items, customer, total } = req.body;

    if (!items || !customer || !total) {
      return res.status(400).json({ message: "Missing order data" });
    }

    const order = new Order({ items, customer, total });
    await order.save();
    res.status(201).json({ success: true, order });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
