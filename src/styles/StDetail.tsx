import styled from "styled-components";
import DetailImg from "../asset/Detailmg.png";
import EditImg from "../asset/EditImg.png";
import DeleteImg from "../asset/DeleteImg.png";
import AddImg from "../asset/AddImg.png";
import False from "../asset/False.png";
import Done from "../asset/Done.png";

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

export const FalseButton = styled.div`
  width: 124px;
  height: 80px;
  margin-top: 120px;
  margin-left: 580px;
  background-image: url(${False});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const DoneButton = styled.div`
  width: 94px;
  height: 80px;
  margin-top: 120px;
  margin-left: 595px;
  background-image: url(${Done});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const DetailBox = styled.div`
  width: 700px;
  height: 270px;
  margin-left: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.div`
  font-size: 50px;
  margin: 5px;
  text-align: center;
`;

export const Content = styled.div`
  font-size: 35px;
  margin: 5px;
  text-align: center;
`;

export const EditInput = styled.input`
  width: 550px;
  height: 50px;
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
  border-radius: 15px;
  background-color: #fffed4;
  outline: none;
`;

export const EditTextArea = styled.textarea`
  width: 550px;
  height: 100px;
  margin-left: 20px;
  margin-bottom: 10px;
  padding: 10px;
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
  border-radius: 20px;
  background-color: #fffed4;
  outline: none;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 340px;
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
