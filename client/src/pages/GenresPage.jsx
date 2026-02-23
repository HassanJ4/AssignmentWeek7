import { useEffect, useState } from "react";
import GenreCard from "../components/GenreCard.jsx";

const baseURL = "https://assignmentweek7-dkg7.onrender.com/";

export default function GenresPage() {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      const res = await fetch(`${baseURL}/genres`); // your server endpoint
      const data = await res.json();
      setGenres(data);
    }

    fetchGenres();
  }, []);

  return (
    <main className="genres-page">
      <h2>Explore by Genre </h2>
      <div className="genres-grid">
        {genres.map((genre) => (
          <GenreCard key={genre.id} genre={genre} />
        ))}
      </div>
    </main>
  );
}