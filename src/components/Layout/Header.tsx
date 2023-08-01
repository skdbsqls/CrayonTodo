import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return <HeaderContainer>짱구의 못 말리는 하루</HeaderContainer>;
};

export default Header;

const HeaderContainer = styled.div`
  width: 1400px;
  font-size: 54px;
  font-weight: bold;
  padding-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
