"use client"

import { useState, useEffect } from "react"
import ImagePainting from "../components/ImagePainting"
import Sidebar from "../components/Sidebar"
import { paintings } from "@/app/test-db/paintings"
import { fetchPaintings } from "@/app/vercel-db/db"

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [size, setSize] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [paintings, setPaintings] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const filters = { searchTerm, size, category, price }
      const fetchedPaintings = await fetchPaintings(filters)
      setPaintings(fetchedPaintings)
    }

    fetchData()
  }, [searchTerm, size, category, price])

  return (
    <>
      <Sidebar
        onSearchChange={setSearchTerm}
        onSizeChange={setSize}
        onCategoryChange={setCategory}
        onPriceChange={setPrice}
      />
      {paintings.map(painting => (
        <ImagePainting
          key={painting.id}
          src={painting.image}
          alt={painting.title}
        />
      ))}
    </>
  )
}

export default Page
