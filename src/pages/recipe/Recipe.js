// Styles
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "./Recipe.css";

export default function Recipe() {
  const { id } = useParams();
  const {
    data: recipe,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes/" + id);

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">{isPending}</p>}
      {recipe && (
        <>
          <h1 className="page-title">{recipe.title}</h1>
          <p>Takes {recipe.time} to cook</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <div className="method">{recipe.method}</div>
        </>
      )}
    </div>
  );
}
