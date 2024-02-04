import "@/app/(pages)/page-styles.css"
import Link from "next/link"
import { paintings } from "@/app/test-db/expuse"

export default function PaintersList() {
  // Create a unique list of painter names
  const painterNames = Array.from(new Set(paintings.map(p => p.painter)))

  return (
    <select className="painter-select" defaultValue="">
      <option value="" disabled>
        Select a painter
      </option>
      {painterNames.map(painter => (
        <option key={painter} value={painter}>
          {painter}
        </option>
      ))}
    </select>
  )
}
