import styled from "styled-components";

const SLoading = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`;

export const Loading = () => {
  return <SLoading>Loading...</SLoading>;
};
