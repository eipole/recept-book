import React, { useEffect, useState } from "react"
import DisplayRecept from "./DisplayRecept"
import { fetchData } from "./fetchData"
import Header from "./Header"

export default function Helper() {
  const [meals, setMeals] = useState()
  const [toit, setToit] = useState("Seafood")

  useEffect(() => {
    async function addData() {
      try {
        const data = await fetchData(toit)
        setMeals(data.meals)
      } catch (error) {
        console.log(error)
      }
    }
    addData()
  }, [toit])

  return (
    <>
      <Header setToit={setToit} />
      <DisplayRecept meals={meals} />
    </>
  )
}
