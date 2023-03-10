// Styles
import { Link } from "react-router-dom";
import "./RecipeList.css";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div>
        <p className="error">No Recipes to load..</p>
      </div>
    );
  }
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="card" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.time} to make</p>
          <div>{recipe.method.substring(0, 100)}</div>
          <Link to={`/recipe/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  );
}
