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
  const [filtersApplied, setFiltersApplied] = useState(false)

  const handleFilterChange = (value, filterSetter) => {
    filterSetter(value)
    setFiltersApplied(true)
  }

  const filteredPaintings = paintings.filter(painting => {
    return (
      (searchTerm === "" ||
        painting.title.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (size === "" || painting.size === size) &&
      (category === "" || painting.category === category) &&
      (price === "" ||
        (painting.price >= price[0] && painting.price <= price[1]))
    )
  })

  const paintingsToShow = filtersApplied
    ? filteredPaintings
    : filteredPaintings.slice(0, 10)
  return (
    <>
      <Sidebar
        onSearchChange={value => handleFilterChange(value, setSearchTerm)}
        onSizeChange={value => handleFilterChange(value, setSize)}
        onCategoryChange={value => handleFilterChange(value, setCategory)}
        onPriceChange={value => handleFilterChange(value, setPrice)}
      />
      {paintingsToShow.map(painting => (
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