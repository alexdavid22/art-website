"use client"

import React, { useState, useRef } from "react"

export default function PaintForm() {
  const [painter, setPainter] = useState("")
  const [subImages, setSubImages] = useState([null]) // Initialize with null for file inputs
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [size, setSize] = useState("")
  const [price, setPrice] = useState("")

  const primaryImageFileRef = useRef(null)
  const subImageFileRefs = useRef([])

  // Handle sub-image input fields change
  const handleSubImageChange = index => e => {
    subImageFileRefs.current[index] = e.target.files[0] // Directly storing the file object
  }

  // Handle click on "Add sub-image" button
  const handleAddSubImage = () => {
    setSubImages([...subImages, null]) // Just to trigger a new input field
    subImageFileRefs.current.push(null)
  }

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault()

    // Upload primary image
    const primaryImageFile = primaryImageFileRef.current.files[0]
    const primaryImageResponse = await fetch(
      `/api/upload-file?filename=${primaryImageFile.name}`,
      {
        method: "POST",
        body: primaryImageFile,
      }
    )
    const primaryImageBlob = await primaryImageResponse.json()
    const primaryImageUrl = primaryImageBlob.url // Directly use this URL

    // Upload sub-images
    const subImageUrls = await Promise.all(
      subImageFileRefs.current.map(async file => {
        if (!file) return null // Skip if no file is selected
        const subImageResponse = await fetch(
          `/api/upload-file?filename=${file.name}`,
          {
            method: "POST",
            body: file,
          }
        )
        const subImageBlob = await subImageResponse.json()
        return subImageBlob.url // Collect URLs
      })
    )

    // Filter out any null values in case there are empty slots
    const filteredSubImageUrls = subImageUrls.filter(url => url !== null)

    // Construct form data with updated image URLs
    const formData = {
      painter,
      primaryImage: primaryImageUrl,
      subImages: filteredSubImageUrls,
      title,
      description,
      size,
      price,
    }

    // Submit form data
    try {
      const response = await fetch("/api/database", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        const result = await response.json()
        console.log("Success:", result)
        // Optionally reset the form or provide user feedback
      } else {
        console.error("Error:", response.statusText)
        // Handle HTTP error responses
      }
    } catch (error) {
      console.error("Error:", error)
      // Handle network errors
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "150px" }}>
      <input
        type="text"
        value={painter}
        onChange={e => setPainter(e.target.value)}
        placeholder="Painter"
      />
      <input
        type="file"
        ref={primaryImageFileRef}
        onChange={() => {}}
        placeholder="Primary Image"
      />

      {subImages.map((_, index) => (
        <input
          key={index}
          type="file"
          onChange={handleSubImageChange(index)}
          placeholder={`Sub Image ${index + 1}`}
        />
      ))}

      <button type="button" onClick={handleAddSubImage}>
        Add sub-image
      </button>

      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Title"
      />
      <textarea
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Description"
      ></textarea>
      <input
        type="text"
        value={size}
        onChange={e => setSize(e.target.value)}
        placeholder="Size"
      />
      <input
        type="text"
        value={price}
        onChange={e => setPrice(e.target.value)}
        placeholder="Price"
      />
      <button type="submit">Submit</button>
    </form>
  )
}
