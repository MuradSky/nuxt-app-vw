import products from "~~/server/db/data.json"

export default defineEventHandler(async (event) => {
    return {
        products
    }
})