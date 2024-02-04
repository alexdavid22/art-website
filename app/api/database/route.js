import { sql } from "@vercel/postgres"
import { NextResponse } from "next/server"

export async function POST(request) {
  const { painter, primaryImage, subImage1, title, description, size, price } =
    await request.json()
  const priceInt = parseInt(price, 10)

  try {
    if (
      !painter ||
      !primaryImage ||
      !title ||
      !description ||
      !size ||
      !price
    ) {
      throw new Error("Missing required fields")
    }

    await sql`INSERT INTO paints (painter, primaryImage, subImage1, title, description, size, price) 
      VALUES (${painter}, ${primaryImage}, ${subImage1}, ${title}, ${description}, ${size}, ${priceInt});`
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  const artworks = await sql`SELECT * FROM paints;`
  return NextResponse.json({ artworks }, { status: 200 })
}
