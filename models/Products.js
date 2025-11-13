import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  image: String,
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
