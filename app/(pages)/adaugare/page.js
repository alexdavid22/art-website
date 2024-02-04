"use client"

import React, { useState } from "react"

export default function PaintForm() {
  // Initialize state for each form field
  const [painter, setPainter] = useState("")
  const [primaryImage, setPrimaryImage] = useState("")
  const [subImage1, setSubImage1] = useState("")
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [size, setSize] = useState("")
  const [price, setPrice] = useState("")

  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault() // Prevent default form submission behavior

    // Form data to be sent
    const formData = {
      painter,
      primaryImage,
      subImage1,
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
      <input
        type="text"
        value={subImage1}
        onChange={e => setSubImage1(e.target.value)}
        placeholder="Sub Image 1 URL"
      />
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
