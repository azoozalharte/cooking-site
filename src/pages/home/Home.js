// Styles
import "./Home.css";

import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";

export default function Home() {
  const {
    data: recipes,
    isPending,
    error,
  } = useFetch("http://localhost:3000/recipes");
  return (
    <div className="home">
      <h1 className="page-title">All recipes</h1>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">{isPending}</p>}
      {recipes && <RecipeList recipes={recipes} />}
    </div>
  );
}
