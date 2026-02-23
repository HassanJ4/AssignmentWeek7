# Database-Driven Movie Tracker

## What This Project Is
This is a full‑stack movie tracking app built with React, Express, and PostgreSQL.  
It lets users browse movies, filter by genre, add new movies, like them, and delete entries from their collection.

## Features
- View all movies in a gallery layout  
- Filter movies by genre  
- Add new movies with title, director, genre, year, and image  
- Like movies
- Delete movies  
- Navigate between pages using React Router  
- Fully connected to a database  

## Components
- `MovieCard.jsx` – A single movie with like and delete buttons  
- `GenreCard.jsx` – A genre card that links to movies in that genre  
- `MoviesPage.jsx` – Lists all movies  
- `GenresPage.jsx` – Lists all genres  
- `AddMovieForm.jsx` – Form to add a new movie  
- `Header.jsx` – Navigation between pages  

## How It Works
- I used **useState** to store movies and genres, and **useEffect** to fetch them from the backend when the page loads.  
- Movies and genres come from a database through an Express server.  
- Genre filtering uses route parameters (`/movies/genre/:genreName`) to show only relevant movies.  
- Like and delete buttons call API endpoints (`POST /movies/:id/like` and `DELETE /movies/:id`) to update the database and refresh the list.  
- SQL joins in the backend allow displaying genre names instead of IDs without extra queries.  

## What I Learned
- Connecting a React frontend to a database  
- Using **CRUD operations** (Create, Read, Update, Delete) with React and Express  
- Handling state and side effects with React hooks  
- Making dynamic pages that filter content by category  
- Structuring a full-stack app with clear separation between frontend and backend  

## Stretch Goals I Didn’t Do   
- Search and sorting features  
- Creating pages for large movie lists  
- Loading message on Render Server

## Things I found difficult
- Implementing likes and deletes, needed to use in-built AI to fix the bugs although there are still a few left
- Combining related tables to filter data. Needed to use **SQL joins** to display genre labels instead of IDs

## How to Run It
1. Clone the repo  
2. Install dependencies for both client and server  
```bash
cd client
npm install
cd ../server
npm install