import { Link } from "react-router-dom";
import styled from "styled-components";
import { mainStyle } from "../styles";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${mainStyle.padding};
  z-index: 10;
  @media screen and (max-width: 500px) {
    padding: 20px;
  }
`;

const Logo = styled.h3`
  font-size: 26px;
  font-weight: 700;
  a {
    color: crimson;
  }
`;

const MenuWrap = styled.ul`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
`;

const Menu = styled.li`
  margin-left: 40px;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to="/">PNFLIEX</Link>
      </Logo>

      <MenuWrap>
        <Menu>
          <Link to="/">HOME</Link>
        </Menu>
        <Menu>
          <Link to="/search">SEARCH</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
