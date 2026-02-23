import { Link } from "react-router-dom";
import "../CSS/Header.css";

export default function Header() {
    return (
    <header className="header">
        <h1 className="logo">PopcornPal</h1>
        
        <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/add-movie">Add a Movie</Link>
        <Link to="/genres">Genres</Link>
        <Link to="/about">About</Link>
        </nav>
    </header>
    );
}