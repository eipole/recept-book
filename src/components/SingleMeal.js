import {
  Button,
  Card,
  CardContent,
  CardMedia,
  makeStyles,
  Modal,
  Typography,
  useMediaQuery
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
  modalStyle: {
    overflow: "scroll",
    height: "100%",
    display: "block"
  },
  boks: {
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      maxWidth: "50%"
    }
  },
  imageContainer: {
    width: 400
  },
  pilt: {
    padding: theme.spacing(2)
  }
}))

export default function SingleMeal({ meal, open, onClose }) {
  /*   const overmd = useMediaQuery((theme) => theme.breakpoints.up("md"))
  const oversm = useMediaQuery((theme) => theme.breakpoints.up("sm")) */
  const classes = useStyles()

  return (
    <Modal className={classes.modalStyle} open={open} onClose={onClose}>
      <Card className={classes.boks}>
        <CardContent>
          <Typography component="h4">{meal.strArea} </Typography>
          <Typography>{meal.strTags} </Typography>
        </CardContent>
        <CardMedia
          className={classes.pilt}
          component="img"
          height="200"
          image={meal.strMealThumb}
          alt="jamassee"
        />
        <CardContent>
          <Typography> {meal.strInstructions} </Typography>
        </CardContent>
        <Button onClick={onClose}>Close</Button>
      </Card>
    </Modal>
  )
}
