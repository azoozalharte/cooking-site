import { Link } from "react-router-dom";
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar({ recipes }) {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1>Cooking site</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create</Link>
      </nav>
    </div>
  );
}
