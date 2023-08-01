import styled from "styled-components";
import InputImage from "../asset/InputImg.png";

export const InputContainer = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
`;

export const InputBox = styled.div`
  width: 400px;
  height: 700px;
  border-radius: 30px;
  font-size: 25px;
  padding-top: 20px;
  background-image: url(${InputImage});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StInput = styled.input`
  width: 280px;
  height: 40px;
  margin-top: 10px;
  margin-bottom: 10px;
  padding: 5px;
  font-size: 20px;
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
  border-radius: 10px;
  background-color: #c4faff;
  outline: none;
`;

export const StTextArea = styled.textarea`
  width: 280px;
  height: 100px;
  margin-top: 10px;
  padding: 10px;
  font-size: 20px;
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
  border-radius: 10px;
  background-color: #c4faff;
  outline: none;
`;

export const StButton = styled.button`
  width: 80px;
  height: 32px;
  border-radius: 20px;
  font-size: 20px;
  margin: 10px;
  background-color: #fffed4;
  font-family: "KyoboHand";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@1.0/KyoboHand.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
  border: none;
  cursor: pointer;
`;
