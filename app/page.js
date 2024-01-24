import "./globals.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <main>
        <div className="hero">
          <h1 className="hero-title">Relu Tolan Website</h1>
          <p className="hero-subtitle">Welcome to my artistic page</p>
          <button className="hero-cta">Learn More</button>
        </div>
        <div className="section">
          <h2 className="section-header">Section Header</h2>
          <div className="card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Vivamus arcu felis bibendum ut tristique et egestas. Potenti
              nullam ac tortor vitae purus faucibus. Montes nascetur ridiculus
              mus mauris vitae ultricies leo. Quis hendrerit dolor magna eget
              est. Mauris in aliquam sem fringilla ut. Non quam lacus
              suspendisse faucibus interdum posuere lorem ipsum dolor.
              Ullamcorper velit sed ullamcorper morbi. Vulputate mi sit amet
              mauris. Lorem sed risus ultricies tristique nulla aliquet enim
              tortor at. A diam sollicitudin tempor id eu nisl nunc mi. Gravida
              in fermentum et sollicitudin. In vitae turpis massa sed elementum
              tempus egestas. Tellus id interdum velit laoreet id donec. Sit
              amet mauris commodo quis imperdiet massa tincidunt. Augue mauris
              augue neque gravida in fermentum et. Cras semper auctor neque
              vitae tempus quam.
            </p>
            <p>
              Enim sed faucibus turpis in eu. Sem integer vitae justo eget magna
              fermentum iaculis eu. Eu nisl nunc mi ipsum faucibus vitae
              aliquet. Ultricies leo integer malesuada nunc vel. Velit laoreet
              id donec ultrices tincidunt arcu non sodales neque. Pharetra massa
              massa ultricies mi quis hendrerit dolor magna. Integer vitae justo
              eget magna fermentum iaculis eu. Diam vulputate ut pharetra sit.
              At in tellus integer feugiat scelerisque varius morbi enim.
              Ultrices gravida dictum fusce ut placerat orci nulla pellentesque.
              Phasellus vestibulum lorem sed risus ultricies tristique nulla
              aliquet enim. Ipsum consequat nisl vel pretium lectus quam.
              Viverra adipiscing at in tellus integer feugiat scelerisque. Id
              aliquet risus feugiat in ante metus. Suspendisse in est ante in
              nibh mauris cursus. Sed sed risus pretium quam vulputate dignissim
              suspendisse in. Diam in arcu cursus euismod quis viverra. Ligula
              ullamcorper malesuada proin libero nunc consequat.
            </p>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer">
          <div className="footer-links">
            <Link href="/" className="footer-link">
              Acasa
            </Link>
            <Link href="/opere-artistice" className="footer-link">
              Opere artistice
            </Link>
            <Link href="/contact" className="footer-link">
              Contact
            </Link>
          </div>
          <p className="footer-text">© 2024 Relu Tolan</p>
        </div>
      </footer>
    </>
  )
}
