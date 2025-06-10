
import { render, screen } from "@testing-library/react";
import RecipeGallery from "../RecipeGallery";

// Sample data for normal cases (three recipes)
const sampleRecipes = [
  {
    id: 101,
    title: "Test Pancakes",
    ingredients: ["Flour", "Milk", "Eggs"],
    image: "https://via.placeholder.com/300x200?text=Test+Pancakes"
  },
  {
    id: 102,
    title: "Test Salad",
    ingredients: ["Lettuce", "Tomato", "Cucumber"],
    image: "https://via.placeholder.com/300x200?text=Test+Salad"
  },
  {
    id: 103,
    title: "Test Soup",
    ingredients: ["Water", "Salt", "Vegetables"],
    image: "https://via.placeholder.com/300x200?text=Test+Soup"
  }
];

describe("RecipeGallery Component - Normal Cases", () => {
  test("renders one card per recipe", () => {
    render(<RecipeGallery recipes={sampleRecipes} />);
    // There should be exactly 3 elements with data-testid="recipe-card"
    const cards = screen.getAllByTestId("recipe-card");
    expect(cards).toHaveLength(3);
  });

  test("displays recipe title and image alt text correctly", () => {
    render(<RecipeGallery recipes={[sampleRecipes[0]]} />);
    const titleElement = screen.getByText("Test Pancakes");
    expect(titleElement).toBeInTheDocument();

    const imgElement = screen.getByAltText("Test Pancakes");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute("src", sampleRecipes[0].image);
  });

  test("renders list of ingredients for each recipe", () => {
    render(<RecipeGallery recipes={[sampleRecipes[1]]} />);
    // There are three ingredients in sampleRecipes[1]
    sampleRecipes[1].ingredients.forEach((ingredient) => {
      expect(screen.getByText(ingredient)).toBeInTheDocument();
    });
  });
});

describe("RecipeGallery Component - Edge Cases", () => {
  test("shows 'No recipes to display.' when recipes array is empty", () => {
    render(<RecipeGallery recipes={[]} />);
    expect(screen.getByText("No recipes to display.")).toBeInTheDocument();
  });

  test("shows 'No ingredients listed.' when a recipe has an empty ingredients array", () => {
    const noIngredientsRecipe = {
      id: 200,
      title: "Empty Ingredients Dish",
      ingredients: [],
      image: "https://via.placeholder.com/300x200?text=No+Ingredients"
    };
    render(<RecipeGallery recipes={[noIngredientsRecipe]} />);
    expect(screen.getByText("No ingredients listed.")).toBeInTheDocument();
  });

  test("uses placeholder image when image prop is missing or empty", () => {
    const missingImageRecipe = {
      id: 300,
      title: "No Image Dish",
      ingredients: ["Nothing"],
      image: "" // empty string should trigger fallback
    };
    render(<RecipeGallery recipes={[missingImageRecipe]} />);
    // Expect an <img> with alt="No Image Dish" and fallback src
    const imgElement = screen.getByAltText("No Image Dish");
    expect(imgElement).toBeInTheDocument();
    expect(imgElement).toHaveAttribute(
      "src",
      "https://via.placeholder.com/300x200?text=No+Image"
    );
  });
});
