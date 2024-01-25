import Image from "next/image"
import "../../page-styles.css"

const ImagePainting = ({ src, alt }) => {
  return (
    <div className="ImagePainting-frame">
      <div className="ImagePainting-imageContainer">
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={500} // Set to your preferred fixed width
          height={500} // Initially set to the same as width
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default ImagePainting
