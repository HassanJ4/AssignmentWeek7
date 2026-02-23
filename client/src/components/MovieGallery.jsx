import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard.jsx";
import "../CSS/MovieGallery.css";

const baseURL = "https://assignmentweek7-dkg7.onrender.com/";

export default function MovieGallery() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchMovies() {
      const response = await fetch(`${baseURL}/movies`);
      const data = await response.json();
      setMovies(data);
    }

    fetchMovies();
  }, []);

  const handleLike = async (id) => {
    const res = await fetch(`${baseURL}/movies/${id}/like`, {
      method: "POST",
    });

    const updatedMovie = await res.json();

    setMovies((prev) =>
      prev.map((m) => (m.id === id ? updatedMovie : m))
    );
  };

  const handleDelete = async (id) => {
    await fetch(`${baseURL}/movies/${id}`, { method: "DELETE" });

    setMovies((prev) => prev.filter((m) => m.id !== id));
  };

  return (
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
  );
}
