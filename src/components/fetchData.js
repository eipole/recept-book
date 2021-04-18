export async function fetchData(meal) {
  const data = await fetch(
    `${process.env.REACT_APP_SEAFOOD}${meal}`
  ).then((response) => response.json())
  return data
}

export async function fetchMeal(mealid) {
  const data = await fetch(
    `${process.env.REACT_APP_MEAL_ID}${mealid}`
  ).then((res) => res.json())
  return data
}
