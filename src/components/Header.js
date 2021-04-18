import {
  AppBar,
  Button,
  makeStyles,
  Menu,
  MenuItem,
  RootRef,
  Toolbar,
  Typography
} from "@material-ui/core"
import React, { createRef, useRef, useState } from "react"

const useStyles = makeStyles((theme) => ({
  Button: {},
  toolStyles: {
    justifyContent: "center"
  }
}))

export default function HeaderMenu({ setToit }) {
  const [anchorEl, setAnchorEl] = useState(null)
  /*    const menuRef = useRef()*/
  const menuRef = createRef()
  const ref = createRef()
  const classes = useStyles()

  function handleClick(event) {
    console.log(ref)
    // setAnchorEl(event.currentTarget)
    setAnchorEl(ref.current)
  }
  function handleAdd(event) {
    const buttonLabel = event.target.innerHTML
    setToit(buttonLabel)
  }

  function handleClose() {
    setAnchorEl(null)
  }

  return (
    <RootRef rootRef={menuRef}>
      <AppBar>
        <Toolbar className={classes.toolStyles}>
          {/* <Typography variant="h3">Siin on recept</Typography> */}
          <Button
            size="large"
            variant="outlined"
            aria-controls="simple-menu"
            aria-haspopup="true"
            onClick={handleClick}
            color="secondary"
            className={classes.Button}
            ref={ref}
          >
            Chose meat
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              <Button onClick={(e) => handleAdd(e)}>Seafood</Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button onClick={(e) => handleAdd(e)}>Pork</Button>
            </MenuItem>
            <MenuItem>
              <Button onClick={(e) => handleAdd(e)}>Chicken</Button>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Button onClick={(e) => handleAdd(e)}>Beef</Button>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </RootRef>
  )
}
/*           
      
 */
