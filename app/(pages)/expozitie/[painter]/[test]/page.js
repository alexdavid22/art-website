"use client"

import { useState } from "react"
import { paintings } from "@/app/test-db/expuse"
import Image from "next/image"

const ImageDetails = ({ params }) => {
  const painting = paintings.find(p => p.id === parseInt(params.test))

  if (!painting) {
    return <p>No painting found with id {params.test}</p>
  }

  const imgBigArray = Object.keys(painting)
    .filter(key => key.startsWith("imgBig"))
    .map(key => painting[key])
    .filter(Boolean)

  const [loadingImages, setLoadingImages] = useState(
    imgBigArray.map(() => true)
  )

  const handleImageLoad = index => {
    setLoadingImages(
      loadingImages.map((loading, i) => (i === index ? false : loading))
    )
  }

  // Create a state variable to keep track of the currently selected image
  const [selectedImage, setSelectedImage] = useState(null)

  // Handle the onClick event of an image
  const handleImageClick = img => {
    setSelectedImage(img)
  }

  // If a painting is found, display its details
  return (
    <div className="Id-all">
      <h1>{painting.title}</h1>
      <Image
        className="Id-frame"
        src={painting.imgSmall}
        alt={painting.title}
        width={300}
        height={300}
        layout="responsive"
        onClick={() => handleImageClick(painting.imgSmall)}
      />
      <p>{painting.description}</p>
      <p>Size: {painting.sizeCm}</p>
      <p>Price: {painting.price}</p>

      <div className="Id-big-cont">
        {loadingImages.some(Boolean) && <p>Images loading...</p>}
        {imgBigArray.map((img, index) => (
          <Image
            key={index}
            className="Id-big"
            src={img}
            alt={painting.title}
            width={300}
            height={300}
            layout="responsive"
            onLoad={() => handleImageLoad(index)}
            onClick={() => handleImageClick(img)} // Add the onClick event handler
          />
        ))}
      </div>

      {/* Display the modal with the selected image */}
      {selectedImage && (
        <div className="modal">
          <span className="close" onClick={() => setSelectedImage(null)}>
            &times;
          </span>
          <Image
            className="modal-content"
            src={selectedImage}
            alt={painting.title}
            layout="fill"
          />
        </div>
      )}
    </div>
  )
}

export default ImageDetails
