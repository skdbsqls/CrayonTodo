import styled from "styled-components";
import ListImg from "../asset/ListImg.png";

export const ListContainer = styled.div`
  width: 404px;
  height: 730px;
  margin-top: 50px;
  background-image: url(${ListImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TodoTitle = styled.div`
  width: 250px;
  height: 90px;
  font-size: 26px;
  margin-left: 38px;
  margin-bottom: 1.8px;
  padding: 20px 10px 20px 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
