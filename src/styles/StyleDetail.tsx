import styled from "styled-components";
import DetailImg from "../asset/Detailmg.png";
import EditImg from "../asset/EditImg.png";
import DeleteImg from "../asset/DeleteImg.png";
import AddImg from "../asset/AddImg.png";
import falseImg from "../asset/falseImg.png";
import doneImg from "../asset/doneImg.png";

export const DetailLayout = styled.div`
  width: 832px;
  height: 830px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailContainer = styled.div`
  width: 752px;
  height: 650px;
  margin-left: 30px;
  background-image: url(${DetailImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const DetailBox = styled.div`
  width: 700px;
  height: 280px;
  margin-left: 20px;
  margin-top: 180px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const OpenModalContainer = styled.div`
  display: flex;
`;

export const OpenModalComment = styled.div`
  font-size: 40px;
  margin-left: 20px;
  padding: 20px;
`;

export const OpenModal = styled.div`
  width: 140px;
  height: 90px;
  margin-left: 80px;
  background-image: url(${AddImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

// const False = styled.div`
//   width: 100px;
//   height: 130px;
//   background-image: url(${falseImg});
//   background-size: cover;
//   background-repeat: no-repeat;
// `;

export const Title = styled.div`
  font-size: 50px;
  margin: 20px;
`;

export const Content = styled.div`
  font-size: 35px;
  margin: 20px;
`;

export const EditInput = styled.input`
  width: 550px;
  height: 70px;
  margin-left: 20px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 30px;
  text-align: center;
  font-family: "KyoboHand";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50px;
  background-color: #fffed4;
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 320px;
`;

export const EditButton = styled.div`
  width: 150px;
  height: 110px;
  font-size: 30px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${EditImg});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;

export const DeleteButton = styled.div`
  width: 150px;
  height: 110px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${DeleteImg});
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;

  &:hover {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
`;
