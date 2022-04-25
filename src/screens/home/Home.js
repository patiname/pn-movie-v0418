import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";

const MainBanner = styled.div`
  height: 80vh;
  background-color: gray;
`;

const Title = styled.h3``;

const Desc = styled.p``;

export const Home = () => {
  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [upComingData, setUpComingData] = useState();

  useEffect(() => {
    const movieData = async () => {
      const {
        data: { results: nowPlayingResult },
      } = await movieApi.nowPlaying();
      // console.log(await movieApi.nowPlaying());
      // console.log(results);
      setNowPlayingData(nowPlayingResult);

      const {
        data: { results: popularResult },
      } = await movieApi.popular();
      setPopData(popularResult);

      const {
        data: { results: upComingResult },
      } = await movieApi.upComing();
      setUpComingData(upComingResult);
    };
    movieData();
  }, []);

  console.log("현재 상영:", nowPlayingData);
  console.log("인기 영화:", popData);
  console.log("개봉 예정:", upComingData);
  return (
    <div>
      {nowPlayingData ? (
        <MainBanner
          style={{
            background: `url(https://image.tmdb.org/t/p/original${nowPlayingData[0].backdrop_path}) no-repeat center / cover`,
          }}
        >
          <Title></Title>
          <Desc></Desc>
        </MainBanner>
      ) : (
        "loading"
      )}
    </div>
  );
};
