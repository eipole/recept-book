import {
  AppBar,
  Button,
  IconButton,
  Toolbar,
  Typography
} from "@material-ui/core"
import React from "react"

export default function Header() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h3">Siin on recept</Typography>
        <IconButton>Chose your meal</IconButton>
        <Button>Fish</Button>
        <Button>Meat</Button>
        <Button>Chicken</Button>
      </Toolbar>
    </AppBar>
  )
}
