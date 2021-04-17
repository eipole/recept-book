import { Container } from "@material-ui/core"
import React from "react"
import DisplayRecept from "./components/DisplayRecept"
import Header from "./components/Header"

function App() {
  return (
    <Container maxWidth="md">
      <Header />
      <DisplayRecept />
    </Container>
  )
}

export default App
