import styled from "styled-components";

const SMainBanner = styled.div`
  height: 80vh;
  background-color: gray;
  padding: 350px 60px;
  position: relative;
`;

const Title = styled.h3`
  max-width: 500px;
  width: 100%;
  font-size: 80px;
  font-weight: 700;
  margin-bottom: 20px;
  position: relative;
  z-index: 9;
`;

const Desc = styled.p`
  max-width: 600px;
  width: 100%;
  line-height: 1.5rem;
  font-size: 18px;
  position: relative;
  z-index: 9;
  opacity: 0.7;
`;

const BlackBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(transparent, black);
  position: absolute;
  top: 0;
  left: 0;
`;

export const MainBanner = ({ data }) => {
  return (
    <SMainBanner
      style={{
        background: `url(https://image.tmdb.org/t/p/original${data[0].backdrop_path}) no-repeat center / cover`,
      }}
    >
      <Title>{data[0].title}</Title>
      <Desc>{data[0].overview.slice(0, 100) + "..."}</Desc>
      <BlackBg />
    </SMainBanner>
  );
};
