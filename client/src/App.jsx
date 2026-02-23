import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import AddMoviePage from "./pages/AddMoviePage";
import GenresPage from "./pages/GenresPage";
import GenreMoviesPage from "./pages/GenreMoviesPage";
import AboutPage from "./pages/AboutPage";

export default function App() {
  return (
    <div className="app-container">
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/add-movie" element={<AddMoviePage />} />
        <Route path="/genres" element={<GenresPage />} />
        <Route path="/genres/:genreName" element={<GenreMoviesPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}