import "../page-styles.css"
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <>
      <div className="dn-btn-links">
        <Link href="/opere-artistice/stil1">
          <button>Stil 1</button>
        </Link>
        <Link href="/opere-artistice/stil2">
          <button>Stil 2</button>
        </Link>
        <Link href="/opere-artistice/stil3">
          <button>Stil 3</button>
        </Link>
        <Link href="/opere-artistice/stil4">
          <button>Stil 4</button>
        </Link>
      </div>

      <div className="dn-disclaimer">
        <h1>Aici puteti vizualiza diverse picturi si stiluri artistice</h1>
      </div>

      {children}
    </>
  )
}
