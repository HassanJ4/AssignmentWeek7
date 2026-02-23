import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const db = new pg.Pool({
  connectionString: process.env.DB_CONN,
});

app.get("/", (req, res) => {
  res.send("Movie Tracker API is running. Use /movies to view movies.");
});

app.get("/movies", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT movies.*, genres.name AS genre_name
      FROM movies
      JOIN genres ON movies.genre_id = genres.id
      ORDER BY movies.id DESC
    `);

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/movies", async (req, res) => {
  try {
    const { title, director, genre_id, release_year, image } = req.body;

    const result = await db.query(
      `INSERT INTO movies (title, director, genre_id, release_year, image)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [title, director, genre_id, release_year, image]
    );

    res.status(201).json(result.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.post("/movies/:id/like", async (req, res) => {
  try {
    const movieId = req.params.id;

    // Increase likes by 1
    await db.query(
      `UPDATE movies SET likes = COALESCE(likes, 0) + 1 WHERE id = $1`,
      [movieId]
    );

    // Return the updated movie
    const updated = await db.query(
      `SELECT movies.*, genres.name AS genre_name
       FROM movies
       JOIN genres ON movies.genre_id = genres.id
       WHERE movies.id = $1`,
      [movieId]
    );

    res.status(200).json(updated.rows[0]);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


app.delete("/movies/:id", async (req, res) => {
  try {
    await db.query(
      `DELETE FROM movies WHERE id = $1`,
      [req.params.id]
    );

    res.status(204).send();

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.get("/genres", async (req, res) => {
  try {
    const result = await db.query(`
      SELECT * FROM genres
      ORDER BY name ASC
    `);

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});


app.get("/movies/genre/:genreName", async (req, res) => {
  try {
    const { genreName } = req.params;

    const result = await db.query(`
      SELECT movies.*, genres.name AS genre_name
      FROM movies
      JOIN genres ON movies.genre_id = genres.id
      WHERE genres.name = $1
      ORDER BY movies.id DESC
    `, [genreName]);

    res.status(200).json(result.rows);

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 4242;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
