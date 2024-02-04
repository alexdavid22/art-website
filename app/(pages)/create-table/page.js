"use client"

const MyComponent = () => {
  const getTable = async () => {
    try {
      const response = await fetch("/api/test", {
        method: "GET",
      })
      const data = await response.json()
      console.log("Success:", data)
      // Handle success response, such as showing a notification to the user
    } catch (error) {
      console.error("Error:", error)
      // Handle error response, such as showing an error message
    }
  }

  const createTable = async () => {
    try {
      const response = await fetch("/api/test", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Fluffy",
          owner: "John Doe",
        }),
      })
      const data = await response.json()
      console.log("Success:", data)
      // Handle success response, such as showing a notification to the user
    } catch (error) {
      console.error("Error:", error)
      // Handle error response, such as showing an error message
    }
  }

  return (
    <div>
      <button onClick={getTable}>Get Table</button>
      <button onClick={createTable}>Create Table</button>
      <p></p>
    </div>
  )
}

export default MyComponent
