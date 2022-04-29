import styled from "styled-components";

const SFooter = styled.footer`
  height: 150px;
  border-top: 1px solid #555;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 100px;
`;

export const Footer = () => {
  return <SFooter>&copy; {new Date().getFullYear()} PNcoding </SFooter>;
};
