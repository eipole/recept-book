import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  Toolbar,
  Typography
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
  iconButton: {
    paddingLeft: theme.spacing(8)
  }
}))

export default function Header({ setToit }) {
  const classes = useStyles()
  function handleClick(e) {
    console.log(e)
    const buttonLabel = e.target.innerHTML
    setToit(buttonLabel)
  }
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h3">Siin on recept</Typography>
        <IconButton
          postion="center"
          color="secondary"
          className={classes.iconButton}
        >
          Chose your meal
        </IconButton>
        <Button onClick={(e) => handleClick(e)}>Seafood</Button>
        <Button onClick={(e) => handleClick(e)}>Pork</Button>
        <Button onClick={(e) => handleClick(e)}>Chicken</Button>
        <Button onClick={(e) => handleClick(e)}>Beef</Button>
      </Toolbar>
    </AppBar>
  )
}
