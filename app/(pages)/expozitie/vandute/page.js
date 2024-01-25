import ImagePainting from "../components/ImagePainting"
import Sidebar from "../components/Sidebar"

const Page = () => {
  return (
    <>
      <Sidebar />
      <ImagePainting src="/images/stil2/landscape.png" alt="Painting 1" />
      <ImagePainting src="/images/stil2/portrait.png" alt="Painting 1" />
      <ImagePainting src="/images/stil2/landscape.png" alt="Painting 1" />
    </>
  )
}

export default Page
