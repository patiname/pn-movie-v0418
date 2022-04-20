import { useEffect, useState } from "react";
import { movieApi } from "./api";

const App = () => {
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

  return <div></div>;
};

export default App;
