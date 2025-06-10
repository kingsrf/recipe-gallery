
const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    ingredients: ["Pasta", "Eggs", "Parmesan Cheese", "Bacon"],
    image: process.env.PUBLIC_URL + "/images/carbonara.jpg"
  },
  {
    id: 2,
    title: "Chicken Caesar Salad",
    ingredients: ["Romaine Lettuce", "Grilled Chicken", "Croutons", "Caesar Dressing"],
    image: process.env.PUBLIC_URL + "/images/salad.jpg"
  },
  {
    id: 3,
    title: "Veggie Stir Fry",
    ingredients: ["Broccoli", "Carrots", "Bell Peppers", "Soy Sauce"],
    image: process.env.PUBLIC_URL + "/images/stirfry.jpg"
  }
];

export default recipes;
