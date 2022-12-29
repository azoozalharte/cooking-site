// styles
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// Styles
import "./Searchbar.css";
export default function Searchbar() {
  const [term, setTerm] = useState("");
  let navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    setTerm("");

    navigate(`/search?q=${term}`);
  }
  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label htmlFor="search">Search:</label>
        <input
          type="text"
          id="search"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
        />
      </form>
    </div>
  );
}
