// Styles
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// components
import RecipeList from "../../components/RecipeList";
//styles
import "./Search.css";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const { data, error, isPending } = useFetch(
    `http://localhost:3000/recipes?title=${query}`
  );
  return (
    <div>
      <h1 className="page-title">You searched for ( {query} )</h1>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">{isPending}</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
