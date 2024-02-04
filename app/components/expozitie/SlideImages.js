import Image from "next/image"

const SlideImages = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map(
        (imgUrl, index) =>
          imgUrl && (
            <div key={index} className="slide">
              <Image
                src={imgUrl}
                alt={`Painting view ${index + 1}`}
                width={500} // Set desired width
                height={300} // Set desired height
                onClick={() => {
                  /* handle image click if needed */
                }}
              />
            </div>
          )
      )}
    </div>
  )
}

export default SlideImages
