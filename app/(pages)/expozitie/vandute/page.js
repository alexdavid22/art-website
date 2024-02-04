import ImagePainting from "../../../components/expozitie/ImagePainting"
import Sidebar from "../../../components/expozitie/Sidebar"

const Page = () => {
  const imagePaths = []
  const basePath = "/images/aurelia/vandute/"

  for (let i = 1; i <= 10; i++) {
    const imagePath = `${basePath}${i}.jpg`
    imagePaths.push(imagePath)
  }

  return (
    <>
      <Sidebar />
      {imagePaths.map((path, index) => (
        <ImagePainting key={index} src={path} alt={`Painting ${index + 1}`} />
      ))}
    </>
  )
}

export default Page
