import styled from "styled-components";
import { MOVIE_SMALL_URL } from "../../constants/movieUrl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

const MovieContainer = styled.div`
  margin-top: 80px;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

const MovieBg = styled.div`
  height: 150px;
`;

const MovieTitle = styled.h3`
  margin-top: 20px;
  font-weight: 500;
`;

export const Movies = ({ title, data }) => {
  const params = {
    slidesPerView: 5,
    spaceBetween: 20,
  };

  return (
    <MovieContainer>
      <Title>{title}</Title>
      <Swiper modules={[Navigation]} navigation {...params}>
        {data.map((play) => (
          <SwiperSlide key={play.id}>
            <Link to={`/detail/${play.id}`}>
              <MovieBg
                style={{
                  background: `url(${MOVIE_SMALL_URL}${play.backdrop_path}) no-repeat center / cover`,
                }}
              />
              <MovieTitle>{play.title}</MovieTitle>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </MovieContainer>
  );
};
