import {
  GridList,
  GridListTile,
  GridListTileBar,
  IconButton,
  makeStyles,
  Typography,
  useMediaQuery
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import DisplaySingleMeal from "./DisplaySingleMeal"
import { fetchData, fetchMeal } from "./fetchData"

const useStyles = makeStyles((theme) => ({
  container: {
    background: theme.palette.primary.light
    // border: "2px solid red"
  }
}))

export default function DisplayRecept() {
  // const undermd = useMediaQuery((theme) => theme.breakpoints.up("md"))

  const [open, setOpen] = useState(false)
  const [meals, setMeals] = useState()
  const [singleMeal, setSingleMeal] = useState()

  const classes = useStyles()

  useEffect(() => {
    addData()
  }, [])

  async function addData() {
    const data = await fetchData()
    setMeals(data.meals)
  }
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
                <IconButton v onClick={(e) => handleClick(elem.idMeal)}>
                  <Typography color="primary" variant="body2">
                    Read more
                  </Typography>
                </IconButton>
              }
              title={elem.strMeal}
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  )
}
