import React, { useEffect, useState } from 'react';
import axios from '../../api/axios';
import requests from '../../api/request';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { GrPlayFill } from 'react-icons/gr';
import {
  BannerContainer,
  BannerContents,
  BannerTitle,
  BannerDescription,
  BannerButtons,
  BannerButton,
  BannerButtonIcon,
  BannerFadeBottom,
  BannerButtonSpan,
} from './BannerElement';
function Banner() {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchTrending);
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
    return str?.length > n ? str.slice(0, n - 1) + ' ...' : str;
  }
  return (
    <BannerContainer
      backUrl={`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`}
    >
      <BannerContents>
        <BannerTitle>
          {movie?.title || movie?.name || movie?.original_name}
        </BannerTitle>
        <BannerDescription>{truncate(movie?.overview, 150)}</BannerDescription>
        <BannerButtons>
          <BannerButton>
            <BannerButtonIcon>
              <GrPlayFill />
            </BannerButtonIcon>
            <BannerButtonSpan>Play</BannerButtonSpan>
          </BannerButton>
          <BannerButton info>
            <BannerButtonIcon info>
              <AiOutlineInfoCircle />
            </BannerButtonIcon>
            <BannerButtonSpan>More info</BannerButtonSpan>
          </BannerButton>
        </BannerButtons>
      </BannerContents>
      <BannerFadeBottom></BannerFadeBottom>
    </BannerContainer>
  );
}

export default Banner;
