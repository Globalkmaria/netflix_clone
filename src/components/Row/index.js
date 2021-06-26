import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import {
  RowContainer,
  Title,
  RowPosters,
  RowPoster,
  RowPosterImg,
  RowPosterH3,
} from './RowElement';
// npm i react-youtube
// npm i movie-trailer

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, settrailerUrl] = useState('');
  const baseURL = 'https://image.tmdb.org/t/p/original/';
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };
  const handleClick = (movie) => {
    if (trailerUrl) {
      settrailerUrl('');
    } else {
      movieTrailer(movie?.name || movie?.original_title)
        .then((url) => {
          // https://www,youtube.com/wathch?v=Xtsdas
          console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          // 밑의 코드는 v 이후의 부분을 들고옴
          settrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };
  return (
    <RowContainer>
      <Title>{title}</Title>
      <RowPosters>
        {movies.map(
          (movie) =>
            movie.poster_path &&
            movie.backdrop_path && (
              <RowPoster key={movie.id} onClick={() => handleClick(movie)}>
                <RowPosterImg
                  isLargeRow={isLargeRow}
                  src={`${baseURL}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <RowPosterH3>{movie.name || movie.original_title}</RowPosterH3>
              </RowPoster>
            )
        )}
      </RowPosters>

      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </RowContainer>
  );
}

export default Row;
