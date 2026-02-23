import { useState } from "react";

const baseURL = "https://assignmentweek7-dkg7.onrender.com/";

export default function AddMovieForm() {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [genre, setGenre] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [image, setImage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    if (!title || !director || !genre || !releaseYear) {
      alert("Please fill in all required fields");
      return;
    }

    const newMovie = { title, director, genre, release_year: releaseYear, image };

    await fetch(`${baseURL}/movies`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMovie),
    });

    setTitle("");
    setDirector("");
    setGenre("");
    setReleaseYear("");
    setImage("");

    window.location.reload();
  }

  return (
    <form onSubmit={handleSubmit} className="add-movie-form">
      <input
        type="text"
        placeholder="Movie Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Director"
        value={director}
        onChange={(e) => setDirector(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Release Year"
        value={releaseYear}
        onChange={(e) => setReleaseYear(e.target.value)} 
        required
      />
      <input
        type="text"
        placeholder="Image URL (optional)"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <button type="submit">Add Movie</button>
    </form>
  );
}