import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AddToFavorites } from "../utils/AddToFavorites";

function Movie() {
  const apiKey = import.meta.env.VITE_API_KEY;
  const { id } = useParams();
  const [movie, setMovie] = useState();

  function watchTrailer(name) {
    const url = `https://www.youtube.com/results?search_query=${name}+trailer`;
    window.open(url, "_blank");
  }

  
  useEffect(() => {
    const fetchMovie = async () => {

      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}language=en-US`
        );
        const data = await res.json();
        console.log(data);
        setMovie(data);
      } catch (err) {
        console.error("Failed to fetch", err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) {
    return <p>Loading...</p>;
  }

  return (
    <div className="individual">
      <div className="image">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
      </div>
      <div className="info">
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        <p>Released date: {movie.release_date}</p>
        <button 
          className="watch"
          onClick={() => watchTrailer(movie.title)}
          >
            Watch trailer</button>
        <button
          className="add-favorites"
          onClick={() => AddToFavorites({ ...movie, mediaType: "movie" })}
        >
          Add to favorites
        </button>
      </div>
    </div>
  );
}

export default Movie;
