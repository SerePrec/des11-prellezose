import mongoose from "mongoose";
import ContenedorMongoDB from "./ContenedorMongoDB.js";

const { Schema } = mongoose;

const messageSchema = new Schema({
  user: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: Date.now }
});

const productSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true, min: 0 },
  thumbnail: { type: String }
});

const productsModel = new ContenedorMongoDB("Product", productSchema);
const messagesModel = new ContenedorMongoDB("Message", messageSchema);

export { productsModel, messagesModel };
