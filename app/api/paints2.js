// /api/getPaintings.js
import { sql } from "@vercel/postgres"

export default async (req, res) => {
  const price = 100
  const { rows } =
    await sql`SELECT * FROM paintingtest WHERE price > ${price} LIMIT 5;`
  res.json(rows)
}
