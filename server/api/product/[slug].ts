import { Products } from "~~/server/models/products.model"

export default defineEventHandler(async (event) => {
    const slug = event.context.params.slug
    const product = await Products.findOne({ slug }).exec()
    return {
        product
    }
})