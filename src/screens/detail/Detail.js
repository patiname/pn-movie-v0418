import { useEffect, useState } from "react";
import styled from "styled-components";
import { movieApi } from "../../api";
import { Section } from "../../components/Section";

const DetailContainer = styled.div`
  margin-top: 200px;
`;

export const Detail = () => {
  const [detailData, setDetailData] = useState();

  useEffect(() => {
    const movieData = async () => {
      const name = await movieApi.detail(414906);
      setDetailData(name);
    };
    movieData();
  }, []);
  console.log(detailData);

  return (
    <Section>
      <DetailContainer></DetailContainer>
    </Section>
  );
};
