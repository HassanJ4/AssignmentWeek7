import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";

const baseURL = "https://assignmentweek7-dkg7.onrender.com";

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);

  // FIX: define fetchMovies BEFORE useEffect
  const fetchMovies = async () => {
    try {
      const res = await fetch(`${baseURL}/movies`);
      const data = await res.json();
      setMovies(data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const handleLike = async (id) => {
    try {
      const res = await fetch(`${baseURL}/movies/${id}/like`, {
        method: "POST",
      });

      const updatedMovie = await res.json();

      setMovies((prevMovies) =>
        prevMovies.map((movie) =>
          movie.id === id ? updatedMovie : movie
        )
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

      setMovies((prevMovies) =>
        prevMovies.filter((movie) => movie.id !== id)
      );
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };

  return (
    <main className="movies-page">
      <h2>All Movies</h2>

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
