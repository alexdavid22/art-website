"use client"

import { useState, useEffect } from "react"
import ImagePainting from "../../../components/expozitie/ImagePainting"
import Sidebar from "@/app/components/expozitie/Sidebar"
import { paintings as allPaintings } from "@/app/test-db/expuse"
import Link from "next/link"

const getSizeCategory = sizeCm => {
  const [width, height] = sizeCm.split("x").map(Number)
  const area = width * height
  if (area <= 2000) return "mic"
  if (area <= 5000) return "mediu"
  return "mare"
}

const PainterPage = ({ params }) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [size, setSize] = useState("")
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
      const sizeCategory = getSizeCategory(painting.sizeCm)
      return (
        painting.painter === params.painter &&
        (price
          ? maxPrice
            ? painting.price >= minPrice && painting.price <= maxPrice
            : painting.price >= minPrice
          : true) &&
        (searchTerm === "" ||
          painting.title.toLowerCase().includes(searchTerm)) &&
        (size === "" || sizeCategory === size)
      )
    })

    setFilteredPaintings(newFilteredPaintings)
  }, [params.painter, price, searchTerm, size])

  return (
    <>
      <Sidebar
        onSearchChange={setSearchTerm}
        onSizeChange={setSize}
        onPriceChange={setPrice}
      />

      {filteredPaintings.length > 0 ? (
        filteredPaintings.map(painting => (
          <Link href={`./${params.painter}/${painting.id}`} key={painting.id}>
            <ImagePainting
              key={painting.id}
              src={painting.imgSmall}
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
