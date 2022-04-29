import styled from "styled-components";

const SSection = styled.section`
  padding: 0 60px;
  @media screen and (max-width: 500px) {
    padding: 0 20px;
  }
`;

export const Section = ({ children }) => {
  //=>children 컴포넌트 안에 있는 모든 자식을 불러올수 있음
  return <SSection>{children}</SSection>;
};
