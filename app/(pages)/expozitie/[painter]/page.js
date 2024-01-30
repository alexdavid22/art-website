"use client"

import { useState, useEffect } from "react"
import ImagePainting from "../components/ImagePainting"
import Sidebar from "../components/Sidebar"
import { paintings as allPaintings } from "@/app/test-db/expuse"
import Link from "next/link"

const PainterPage = ({ params }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [size, setSize] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")
  const [filteredPaintings, setFilteredPaintings] = useState([])

  useEffect(() => {
    const newFilteredPaintings = allPaintings.filter(painting => {
      let minPrice, maxPrice
      if (price === "3500+") {
        minPrice = 3500
        maxPrice = Infinity
      } else {
        ;[minPrice, maxPrice] = price.split("-").map(Number)
      }
      return (
        painting.painter === params.painter &&
        (price
          ? maxPrice
            ? painting.price >= minPrice && painting.price <= maxPrice
            : painting.price >= minPrice
          : true) &&
        (category === "" ||
          painting.category.toLowerCase().includes(category)) &&
        (searchTerm === "" ||
          painting.title.toLowerCase().includes(searchTerm)) &&
        (size === "" || painting.size === size)
      )
    })

    setFilteredPaintings(newFilteredPaintings)
  }, [params.painter, price, category, searchTerm, size])

  return (
    <>
      <Sidebar
        onSearchChange={setSearchTerm}
        onSizeChange={setSize}
        onCategoryChange={setCategory}
        onPriceChange={setPrice}
      />
      {filteredPaintings.length > 0 ? (
        filteredPaintings.map(painting => (
          <Link href={`./${params.painter}/${painting.id}`}>
            <ImagePainting
              key={painting.id}
              src={painting.image}
              alt={painting.title}
              title={painting.title}
              category={painting.category}
              description={painting.description}
              size={painting.size}
              price={painting.price}
            />{" "}
          </Link>
        ))
      ) : (
        <p>No paintings to show.</p>
      )}
    </>
  )
}

export default PainterPage
