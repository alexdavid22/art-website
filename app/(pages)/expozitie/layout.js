import { paintings } from "@/app/test-db/expuse"
import "../page-styles.css"
import Link from "next/link"

export default function Layout({ children }) {
  // Create a unique list of painter names
  const painterNames = Array.from(new Set(paintings.map(p => p.painter)))

  return (
    <>
      <div className="dn-btn-links">
        {painterNames.map(painter => (
          <Link href={`/expozitie/${painter}`} key={painter}>
            <button key={painter}>{painter}</button>
          </Link>
        ))}
      </div>

      {children}
    </>
  )
}
