import {
  Button,
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
  Typography,
  useMediaQuery
} from "@material-ui/core"
import React, { useState } from "react"
import DisplaySingleMeal from "./DisplaySingleMeal"
import { fetchMeal } from "./fetchData"

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.light
    // paddingTop: theme.spacing(10)
  },
  placeholder: theme.mixins.toolbar /* {height: theme.mixins.toolbar} */
}))

export default function DisplayRecept({ meals }) {
  const overmd = useMediaQuery((theme) => theme.breakpoints.up("md"))

  const [open, setOpen] = useState(false)
  const [singleMeal, setSingleMeal] = useState()

  const classes = useStyles()

  function handleClick(id) {
    // setSelectedMeal(id)
    handleFetchMeal(id)
    setOpen(true)
  }

  async function handleFetchMeal(mealid) {
    try {
      const data = await fetchMeal(mealid)
      setSingleMeal(data)
    } catch (error) {
      console.log(error)
    }
  }

  function handleClose() {
    setOpen(false)
  }

  return (
    <div className={classes.container}>
      <div className={classes.placeholder} />
      <DisplaySingleMeal
        singleMeal={singleMeal}
        open={open}
        onClose={handleClose}
      />

      <GridList cols={3}>
        {[]}
        {meals?.map((elem) => (
          <GridListTile key={elem.idMeal}>
            <img src={elem.strMealThumb} alt="see siin" />
            <GridListTileBar
              actionIcon={
                <Button onClick={(e) => handleClick(elem.idMeal)}>
                  <Typography color="secondary" variant="body2">
                    Read more
                  </Typography>
                </Button>
              }
              title={overmd ? elem.strMeal : null}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
