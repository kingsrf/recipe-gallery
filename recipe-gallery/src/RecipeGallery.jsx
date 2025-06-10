
import "./RecipeGallery.css";
import defaultRecipes from "./recipes";

const RecipeGallery = ({ recipes = defaultRecipes }) => {
  return (
    <div className="gallery-container">
      {recipes.length === 0 ? (
        <p className="no-recipes">No recipes to display.</p>
      ) : (
        recipes.map((recipe) => (
          <div className="recipe-card" key={recipe.id} data-testid="recipe-card">
            <img
              src={recipe.image || "https://via.placeholder.com/300x200?text=No+Image"}
              alt={recipe.title}
              className="recipe-image"
            />
            <h2 className="recipe-title">{recipe.title || "Untitled Recipe"}</h2>
            {Array.isArray(recipe.ingredients) && recipe.ingredients.length > 0 ? (
              <ul className="ingredients-list">
                {recipe.ingredients.map((item, idx) => (
                  <li key={idx} className="ingredient-item">
                    {item}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="no-ingredients">No ingredients listed.</p>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeGallery;
