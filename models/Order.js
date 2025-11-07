import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema({
  productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  name: String,
  image: String,
  price: Number,
  quantity: Number,
});

const orderSchema = new mongoose.Schema(
  {
    items: [orderItemSchema],
    customer: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: String,
      address: String,
    },
    total: { type: Number, required: true },
    status: { type: String, default: "Pending" },
    paymentStatus: { type: String, default: "Unpaid" },
  },
  { timestamps: true }
);

export default mongoose.model("Order", orderSchema);
