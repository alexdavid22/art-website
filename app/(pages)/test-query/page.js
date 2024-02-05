"use client"

import React, { useState, useEffect } from "react"

function PaintGallery() {
  const [paints, setPaints] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/query-db")
        const data = await response.json()
        console.log(data) // To check the structure of the data
        if (Array.isArray(data)) {
          // Ensure the data is an array
          setPaints(data)
        } else {
          console.error("Expected an array but received:", typeof data)
          setPaints([]) // In case the data isn't in the expected format, set paints to an empty array
        }
      } catch (error) {
        console.error("Error fetching paints:", error)
      }
    }

    fetchData()
  }, [])

  return (
    <div>
      {paints.map((paint, index) => (
        <div key={index}>
          <h2>
            {paint.title} by {paint.painter}
          </h2>
          <img
            src={paint.primaryimage}
            alt={paint.title}
            style={{ width: "100px", height: "auto" }}
          />
          {paint.subimages.map((url, subIndex) => (
            <img
              key={subIndex}
              src={url}
              alt={`${paint.title} subimage ${subIndex + 1}`}
              style={{ width: "50px", height: "auto" }}
            />
          ))}
          <p>{paint.description}</p>
          <p>Size: {paint.size}</p>
          <p>Price: ${paint.price}</p>
        </div>
      ))}
    </div>
  )
}

export default PaintGallery
