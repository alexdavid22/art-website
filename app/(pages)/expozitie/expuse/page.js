"use client"

import { useState } from "react"
import ImagePainting from "../../../components/expozitie/ImagePainting"
import Sidebar from "../../../components/expozitie/Sidebar"
import { paintings } from "@/app/test-db/expuse"
import PaintersList from "@/app/components/expozitie/painter-list"

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
    const categoryFilterPass =
      category === "" ||
      painting.category.toLowerCase().includes(category.toLowerCase())

    return (
      (searchTerm === "" ||
        painting.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (size === "" || painting.size === size) &&
      categoryFilterPass &&
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
      <PaintersList />
      {filteredPaintings.map(painting => (
        <ImagePainting
          src={painting.image}
          alt={painting.title}
          key={painting.id}
          title={painting.title}
          category={painting.category}
          description={painting.description}
          size={painting.size}
          price={painting.price}
        />
      ))}
    </>
  )
}

export default Page
