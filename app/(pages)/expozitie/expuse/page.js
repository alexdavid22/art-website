"use client"

import { useState } from "react"
import ImagePainting from "../components/ImagePainting"
import Sidebar from "../components/Sidebar"
import { paintings } from "@/app/test-db/paintings"

const Page = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [size, setSize] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  const filteredPaintings = paintings.filter(painting => {
    let priceFilterPass = true
    if (price) {
      const [minPrice, maxPrice] = price.split("-").map(Number)
      priceFilterPass = maxPrice
        ? painting.price >= minPrice && painting.price <= maxPrice
        : painting.price >= minPrice
    }

    return (
      (searchTerm === "" ||
        painting.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (size === "" || painting.size === size) &&
      (category === "" || painting.category === category) &&
      priceFilterPass
    )
  })

  return (
    <>
      <Sidebar
        onSearchChange={value => setSearchTerm(value)}
        onSizeChange={value => setSize(value)}
        onCategoryChange={value => setCategory(value)}
        onPriceChange={value => setPrice(value)}
      />
      {filteredPaintings.map(painting => (
        <ImagePainting
          src={painting.image}
          alt={painting.title}
          key={painting.id}
        />
      ))}
    </>
  )
}

export default Page
