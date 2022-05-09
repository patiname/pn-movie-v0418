import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Loading } from "../../components/Loading";
import { Section } from "../../components/Section";
import { MOVIE_URL } from "../../constants/movieUrl";

const DetailContainer = styled.div`
  margin-top: 200px;
  display: flex;
  justify-content: space-between;
`;

const Bg = styled.div`
  width: 48%;
  height: 70vh;
`;

const Con = styled.div`
  width: 48%;
`;

const Title = styled.div`
  font-size: 70px;
  font-weight: 700;
  margin: 50px 0 30px 0;
`;

const Items = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Genres = styled.ul`
  li {
    list-style: disc;
    margin-left: 18px;
    margin-bottom: 10px;
  }
`;

const Payload = styled.p`
  font-size: 18px;
  line-height: 2rem;
  margin-top: 30px;
  opacity: 0.7;
`;

export const Detail = () => {
  const [detailData, setDetailData] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  // =>url 주소의 변수값을 가져옴

  useEffect(() => {
    const movieData = async () => {
      const { data } = await movieApi.detail(id);
      setDetailData(data);
    };
    movieData();
    setLoading(false);
  }, []);
  // console.log(detailData);

  return (
    <Section>
      {loading ? (
        <Loading />
      ) : (
        <>
          {detailData && (
            <DetailContainer>
              <Bg
                style={{
                  background: `url(${MOVIE_URL}${detailData?.backdrop_path}) no-repeat center / cover`,
                }}
              />

              <Con>
                <Title>{detailData?.title}</Title>
                <Items>{detailData?.release_date}</Items>
                <Items>{detailData?.runtime} 분</Items>
                <Genres>
                  {detailData?.genres.map((genre) => (
                    <li key={genre.id}>{genre?.name}</li>
                  ))}
                </Genres>
                <Payload>{detailData?.overview}</Payload>
              </Con>
            </DetailContainer>
          )}
        </>
      )}
    </Section>
  );
};
