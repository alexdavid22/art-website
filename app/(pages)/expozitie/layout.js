import "../page-styles.css"
import Link from "next/link"

export default function Layout({ children }) {
  return (
    <>
      <div className="dn-btn-links">
        <h1>Aurelia Stepan</h1>
        <Link href="/expozitie/expuse">
          <button>Expuse</button>
        </Link>
        <Link href="/expozitie/vandute">
          <button>Vandute</button>
        </Link>
      </div>

      {children}
    </>
  )
}
