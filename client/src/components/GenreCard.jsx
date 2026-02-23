import { Link } from "react-router-dom";
import "../CSS/GenrePage.css";

export default function GenreCard({ genre }) {
  return (
    <Link to={`/genres/${genre.name}`}>
      <div className="genre-card">
        {genre.image && (
          <>
            <img src={genre.image} alt={genre.name} className="genre-card-img" />
          </>
        )}
        <h3>{genre.name}</h3>
        <p>{genre.description}</p>
      </div>
    </Link>
  );
}