import { Container } from "@material-ui/core"
import React from "react"
import SingleMeal from "./SingleMeal"

export default function DisplaySingleMeal({ singleMeal, open, onClose }) {
  return (
    <Container>
      {[]}
      {singleMeal?.meals.map((elem) => (
        <SingleMeal
          open={open}
          onClose={onClose}
          key={elem.idMeal}
          meal={elem}
        />
      ))}
    </Container>
  )
}
