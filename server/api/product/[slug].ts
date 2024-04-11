import products from "~~/server/db/data.json"

export default defineEventHandler(async (event) => {
    const slug = event.context.params.slug
    const product = products.find(item => item.slug === slug)
    return {
        product
    }
})