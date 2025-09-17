import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

// --- Middleware
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());

// --- Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/cartdb")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("Mongo error:", err));

// --- Schema & model
const cartItemSchema = new mongoose.Schema({
  productId: Number,
  title: String,
  price: Number,
  quantity: Number,
  image: String,
});
const CartItem = mongoose.model("CartItem", cartItemSchema);

// --- Routes
app.get("/api/cart", async (req, res) => {
  const items = await CartItem.find();
  res.json(items);
});

app.post("/api/cart", async (req, res) => {
  const { productId, title, price, image } = req.body;
  let item = await CartItem.findOne({ productId });
  if (item) {
    item.quantity += 1;
    await item.save();
  } else {
    item = await CartItem.create({ productId, title, price, image, quantity: 1 });
  }
  res.json(item);
});

app.delete("/api/cart/:id", async (req, res) => {
  await CartItem.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => console.log("API running at http://localhost:5000"));
