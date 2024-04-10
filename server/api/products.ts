import { Products } from "~~/server/models/products.model"

export default defineEventHandler(async (event) => {
    const products = await Products.find();
    return {
        products
    }
})