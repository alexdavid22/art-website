// db.js
import { sql } from "@vercel/postgres"

export async function fetchPaintings({
  searchTerm = "",
  size,
  category,
  priceMin,
  priceMax,
}) {
  // Example of a dynamic query with filters
  let queryText = "SELECT * FROM PaintingTest WHERE TRUE"
  const params = []

  if (searchTerm) {
    queryText += ` AND title ILIKE $${params.length + 1}`
    params.push(`%${searchTerm}%`)
  }

  if (size) {
    queryText += ` AND size = $${params.length + 1}`
    params.push(size)
  }

  if (category) {
    queryText += ` AND category = $${params.length + 1}`
    params.push(category)
  }

  if (priceMin !== undefined && priceMax !== undefined) {
    queryText += ` AND price BETWEEN $${params.length + 1} AND $${
      params.length + 2
    }`
    params.push(priceMin, priceMax)
  }

  const { rows } = await sql`${sql.raw(queryText, ...params)}`
  return rows
}
