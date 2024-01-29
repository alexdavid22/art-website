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
          <h2 className="section-header" style={{ color: "white" }}>
            Bine ati venit
          </h2>
          <div className="card">
            <h1>Ce puteti vedea aici</h1>
            <p>
              Aici puteți vedea o varietate de informații interesante și utile
              despre locul nostru minunat. Cu ajutorul nostru, veți descoperi
              frumusețea naturii, cultura locală bogată și opțiunile nelimitate
              de divertisment. <br /> <br />
              Indiferent dacă sunteți în căutarea aventurilor în aer liber sau
              doriți să explorați atracțiile culturale, suntem aici pentru a vă
              oferi informațiile de care aveți nevoie pentru a vă bucura la
              maxim de călătoria dumneavoastră. <br />
              <br />
              Indiferent dacă sunteți pasionat de natură sau de artă, aici veți
              găsi ceva care să vă fascineze. Puteți explora frumusețea
              peisajelor naturale sau vă puteți pierde în lumea artei cu
              colecția noastră impresionantă. În plus, avem numeroase evenimente
              și activități planificate pentru a vă oferi o experiență
              memorabilă. Haideți să începem călătoria împreună și să facem din
              fiecare moment o aventură de neuitat!
            </p>

            <br />

            <h1>Tipuri de picturi</h1>
            <p>
              În lumea artei, există o varietate de tipuri de picturi, fiecare
              având propria sa frumusețe și semnificație. De la picturile
              abstracte care vă invită să vă lăsați imaginația să zboare, până
              la cele realiste care surprind fiecare detaliu cu precizie
              uluitoare, există ceva pentru fiecare gust artistic. <br />
              <br /> Descoperiți lumile vibrante și expresive create de artiști
              talentați din întreaga lume. Fie că sunteți un iubitor al
              impresionismului, al artei contemporane sau al picturilor clasice,
              există multe de explorat și de apreciat în lumea picturilor.
              Haideți să vă aventurați în această călătorie artistică și să vă
              bucurați de diversitatea tipurilor de picturi care vă vor încânta
              ochii și sufletul!
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
