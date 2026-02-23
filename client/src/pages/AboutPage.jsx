import "../CSS/AboutPage.css";

export default function AboutPage() {
  return (
    <main className="about-page">
      <h2>About PopcornPal</h2>
      <p>
        Welcome to <strong>PopcornPal</strong>! This app lets you track your favorite movies, explore by genre, and add new films to your collection.
      </p>
      <p> Features include: </p>
      <ul>
        <li>View all movies in a gallery format</li>
        <li>Add your favorite movies with title, director, genre, year</li>
        <li>Explore movies by Genres</li>
      </ul>
    </main>
  );
}