import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../components/MovieCard.jsx";

const baseURL = "http://localhost:4242";  

export default function GenreMoviesPage() {
  const { genreName } = useParams();
  const [movies, setMovies] = useState([]);

  // FIX: define fetchMovies BEFORE useEffect
  const fetchMovies = async () => {
    try {
      const res = await fetch(`${baseURL}/movies/genre/${genreName}`);
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching genre movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, [genreName]);

  const handleLike = async (id) => {
    try {
      const res = await fetch(`${baseURL}/movies/${id}/like`, {
        method: "POST",
      });

      const updatedMovie = await res.json();

      setMovies((prev) =>
        prev.map((m) => (m.id === id ? updatedMovie : m))
      );
    } catch (error) {
      console.error("Error liking movie:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`${baseURL}/movies/${id}`, {
        method: "DELETE",
      });

      setMovies((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <main className="genre-movies-page">
      <h2>Movies in {genreName}</h2>

      <div className="movie-gallery">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onLike={handleLike}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </main>
  );
}
