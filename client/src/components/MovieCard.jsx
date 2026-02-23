import "../CSS/MovieCard.css";


export default function MovieCard({ movie, onLike, onDelete }) {
  return (
    <div className="movie-card">
      {movie.image && <img src={movie.image} alt={movie.title} />}
      <h3>{movie.title}</h3>
      <p><strong>Director:</strong> {movie.director}</p>
      <p><strong>Genre:</strong> {movie.genre_name}</p>
      <p><strong>Year:</strong> {movie.release_year}</p>
      <p>Likes: {movie.likes || 0}</p>

      <div className="movie-card-buttons">
        <button onClick={() => onLike(movie.id)}>👍 Like</button>
        <button onClick={() => onDelete(movie.id)}>🗑️ Delete</button>
      </div>
    </div>
  );
}