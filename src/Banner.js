import React, { useEffect, useState } from 'react';
import axios from './axios';
import requests from './request';
import './Banner.css';
function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      let ran_movie = '';
      while (!ran_movie.backdrop_path) {
        ran_movie =
          request.data.results[
            Math.floor(Math.random() * (request.data.results.length - 1))
          ];
      }
      setmovie(ran_movie);
    }
    fetchData();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.slice(0, n - 1 + '...') : str;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <div className="banner__title">
          <h1>{movie?.title || movie?.name || movie?.original_name}</h1>
        </div>
        <p className="banner__description">{truncate(movie?.overview, 150)}</p>
        <div className="banner__buttons">
          <button className="banner__button play">
            <i class="fas fa-play"></i>Play
          </button>
          <button className="banner__button info">More info</button>
        </div>
      </div>
      <div className="banner--fadeBottom"></div>
    </header>
  );
}

export default Banner;
