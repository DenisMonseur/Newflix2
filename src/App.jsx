import { useState } from "react";
import "./styles/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import SeriesRow from "./components/SeriesRow";
import Serie from "./components/Serie";
import MoviesRow from "./components/MoviesRow";
import Movie from "./components/Movie";
import Search from "./components/Search";
import Favorites from "./components/Favorites";
import { Toaster, toast } from "sonner";

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  return (
    <>
      <Toaster />
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <MoviesRow
                  apiUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}page=2`}
                  title="Popular Movies"
                />
                <SeriesRow
                  apiUrl={`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}page=3`}
                  title="Popular Shows"
                />
              </>
            }
          />
          <Route
            path="/series"
            element={
              <>
                <SeriesRow
                  apiUrl={`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}page=1`}
                  title="Top Rated "
                />
                <SeriesRow
                  apiUrl={`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}page=2`}
                  title="Trending"
                />
              </>
            }
          />
          <Route
            path="/movies"
            element={
              <>
                <MoviesRow
                  apiUrl={`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}page=1`}
                  title="Top Rated"
                />
                <MoviesRow
                  apiUrl={`https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}page=1`}
                  title="Trending"
                />
              </>
            }
          />
          <Route path="/serie/:id" element={<Serie />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
