"use client"

import React, { useState } from "react"

export default function PaintForm() {
  // Initialize state for each form field
  const [painter, setPainter] = useState("")
  const [primaryImage, setPrimaryImage] = useState("")
  {
    /*  const [subImage1, setSubImage1] = useState("") */
  }
  const [subImages, setSubImages] = useState([""]) // Initialize with an array containing a single empty string
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [size, setSize] = useState("")
  const [price, setPrice] = useState("")

  // Handle change in sub-image input fields
  const handleSubImageChange = (e, index) => {
    const newSubImages = [...subImages]
    newSubImages[index] = e.target.value
    setSubImages(newSubImages)
  }

  // Handle click on "Add sub-image" button
  const handleAddSubImage = () => {
    setSubImages([...subImages, ""])
  }

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault() // Prevent default form submission behavior

    // Form data to be sent
    const formData = {
      painter,
      primaryImage,
      subImages, // before it was subImage1
      title,
      description,
      size,
      price,
    }

    // Fetch API to send form data to the server
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
        // Handle success - for example, showing a success message or clearing the form
      } else {
        console.error("Error:", response.statusText)
        // Handle error - for example, showing an error message
      }
    } catch (error) {
      console.error("Error:", error)
      // Handle fetch error
    }
  }

  // The form JSX
  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "150px" }}>
      <input
        type="text"
        value={painter}
        onChange={e => setPainter(e.target.value)}
        placeholder="Painter"
      />
      <input
        type="text"
        value={primaryImage}
        onChange={e => setPrimaryImage(e.target.value)}
        placeholder="Primary Image URL"
      />

      {/*
      <input
        type="text"
        value={subImage1}
        onChange={e => setSubImage1(e.target.value)}
        placeholder="Sub Image 1 URL"
      />
      */}

      {subImages.map((subImage, index) => (
        <input
          key={index}
          type="text"
          value={subImage}
          onChange={e => handleSubImageChange(e, index)}
          placeholder={`Sub Image ${index + 1} URL`}
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
