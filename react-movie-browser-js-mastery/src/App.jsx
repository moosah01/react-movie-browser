import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Search from "./components/Search.jsx";
import Spinner from "./components/Spinner.jsx";
import MovieCard from "./components/MovieCard.jsx";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setIsLoading(true);
    setErrorMessage("");

    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;
      const response = await fetch(endpoint, API_OPTIONS);
      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }
      const data = await response.json();
      if (!data.results || data.results.length === 0) {
        setErrorMessage("No movies found.");
        setMovieList([]);
      }
      setMovieList(data.results || []);
      //   console.log(movieList); => this wont work, because setMovieList is async, you will need to use a useEffect
    } catch (error) {
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage("Error fetching movies, please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []); //to call only once at the start when it is rendered

  return (
    <>
      <main>
        <div className="pattern" />
        <div className="wrapper">
          <header>
            <img
              src="./hero.png"
              alt="3 Movie Poster, Black Adam, Dungeon & Dragons, Enola Holmes 2"
            />
            <h1>
              Find <span className="text-gradient">Movies</span> You'll Enjoy
              Witout the Hassle
            </h1>
            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <h1 className="text-white">{searchTerm}</h1>
          </header>
          <section className="all-movies">
            <h2 className="mt-[40px]">All Movies</h2>
            {isLoading ? (
              <Spinner />
            ) : errorMessage ? (
              <p className="text-red-500">{errorMessage}</p>
            ) : (
              <ul>
                {movieList.map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </ul>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default App;
