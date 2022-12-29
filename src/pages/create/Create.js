import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

// Styles
import "./Create.css";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [time, setTime] = useState("");
  const [newIngredients, setNewIngredients] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const { data, error, postData } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );

  let navigate = useNavigate();

  if (data) {
    navigate("/");
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(title, method, time, ingredients);
    postData({ title, method, ingredients, time: time + " munits" });
  }

  function handleAdd(e) {
    e.preventDefault();

    const ing = newIngredients.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((preIng) => [ing, ...preIng]);
    }

    setNewIngredients("");
  }

  return (
    <div className="create">
      <h1 className="page-title">Add Recipe</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>

        <label>
          <span>Recipe Ingredients</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNewIngredients(e.target.value)}
              value={newIngredients}
            />
            <button onClick={handleAdd} className="btn">
              Add
            </button>
          </div>
          {ingredients && (
            <ul>
              {ingredients.map((ing) => (
                <li key={ing}>{ing}</li>
              ))}
            </ul>
          )}
        </label>

        <label>
          <span>Recipe Method</span>
          <textarea
            type="text"
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <label>
          <span>Recipe Time Cooking</span>
          <input
            type="number"
            onChange={(e) => setTime(e.target.value)}
            value={time}
            required
          />
        </label>

        <button>Add</button>
      </form>
    </div>
  );
}
