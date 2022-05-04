import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Loading } from "../../components/Loading";
import { Section } from "../../components/Section";
import { MainBanner } from "./MainBanner";
import { Movies } from "./Movies";

export const Home = () => {
  const navgate = useNavigate();
  // =>페이지 경로를 변경하는 훅

  const [nowPlayingData, setNowPlayingData] = useState();
  const [popData, setPopData] = useState();
  const [upComingData, setUpComingData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const movieData = async () => {
      try {
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

        setLoading(false);
      } catch (error) {
        navgate("/*");
      }
    };
    movieData();
  }, []);

  console.log("현재 상영:", nowPlayingData);
  console.log("인기 영화:", popData);
  console.log("개봉 예정:", upComingData);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        nowPlayingData && (
          <>
            <MainBanner data={nowPlayingData} />
            <Section>
              <Movies title={"현재 상영 영화"} data={nowPlayingData} />
              <Movies title={"인기 영화"} data={popData} />
              <Movies title={"개봉 예정"} data={upComingData} />
            </Section>
          </>
        )
      )}
    </div>
  );
};
