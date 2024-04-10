import { Schema, model } from "mongoose";

const ProductsSchema = new Schema({
    color: { type: String, required: true },
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    engine: { type: String, required: true },
    equipment: { type: String, required: true },
    description: { type: String, required: true },
    is_new: { type: Boolean, required: true },
    category: { type: String, required: true },
    wallpaper: { type: String, required: true }
})

export const Products = model("Products", ProductsSchema);