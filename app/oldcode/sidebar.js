"use client"
import "../../page-styles.css"
import { FiMenu, FiX } from "react-icons/fi"
import { useState } from "react"

const Sidebar = ({
  onSearchChange,
  onSizeChange,
  onCategoryChange,
  onPriceChange,
}) => {
  const [isOpen, setIsOpen] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [size, setSize] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState("")

  const handleSearchChange = event => {
    setSearchTerm(event.target.value)
    onSearchChange(event.target.value)
  }
  const handleSizeChange = event => {
    setSize(event.target.value)
    onSizeChange(event.target.value)
  }

  const handleCategoryChange = event => {
    setCategory(event.target.value)
    onCategoryChange(event.target.value)
  }

  const handlePriceChange = event => {
    const value = event.target.value
    let priceRange

    if (value.includes("-")) {
      priceRange = value.split("-").map(Number)
    } else if (value.includes("+")) {
      priceRange = [Number(value.slice(0, -1)), Infinity]
    }

    setPrice(priceRange)
    onPriceChange(priceRange)
  }

  return (
    <div className={`sidebar ${isOpen ? "" : "closed"}`}>
      <div className="sidebar-relative">
        <input
          type="text"
          placeholder="Search paintings..."
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <div>
          <h4>Dimensiune</h4>
          <label>
            <input
              type="radio"
              name="size"
              value="mic"
              checked={size === "mic"}
              onChange={handleSizeChange}
            />
            Mic
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="mic-mediu"
              checked={size === "mic-mediu"}
              onChange={handleSizeChange}
            />
            Mic-Mediu
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="mediu"
              checked={size === "mediu"}
              onChange={handleSizeChange}
            />
            Mediu
          </label>
          <label>
            <input
              type="radio"
              name="size"
              value="mare"
              checked={size === "mare"}
              onChange={handleSizeChange}
            />
            Mare
          </label>
        </div>

        <div>
          <h4>Category</h4>
          <select value={category} onChange={handleCategoryChange}>
            <option value="original">Original</option>
            <option value="reproducere">Reproducere "Interpretata"</option>
            <option value="creatie">Creatie Inspirata</option>
          </select>
        </div>

        <div>
          <h4>Price</h4>
          <label>
            <input
              type="radio"
              name="price"
              value="0-1000"
              checked={Array.isArray(price) && price.join("-") === "0-1000"}
              onChange={handlePriceChange}
            />
            0-1000
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="1000-2000"
              checked={Array.isArray(price) && price.join("-") === "1000-2000"}
              onChange={handlePriceChange}
            />{" "}
            1000-2000
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="2000-3500"
              checked={Array.isArray(price) && price.join("-") === "2000-3500"}
              onChange={handlePriceChange}
            />{" "}
            2000-3500
          </label>
          <label>
            <input
              type="radio"
              name="price"
              value="3500+"
              checked={
                Array.isArray(price) &&
                (price.join("-") === "3500+" ||
                  (price[0] === 3500 && price[1] === Infinity))
              }
              onChange={handlePriceChange}
            />{" "}
            3500+
          </label>
        </div>

        <div className="icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </div>
  )
}

export default Sidebar
