import styled from "styled-components";
import DetailImg from "../../asset/Detailmg.png";
import AddImg from "../../asset/AddImg.png";

const Default = () => {
  return (
    <DetailLayout>
      <OpenModalContainer>
        <OpenModal />
        <OpenModalComment>임무를 작성하라!</OpenModalComment>
      </OpenModalContainer>
      <DetailContainer>
        <DetailBox>
          <Title>크레파스를 클릭해보세요!</Title>
        </DetailBox>
      </DetailContainer>
    </DetailLayout>
  );
};
export default Default;

const DetailLayout = styled.div`
  width: 832px;
  height: 830px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const DetailContainer = styled.div`
  width: 752px;
  height: 650px;
  margin-left: 30px;
  background-image: url(${DetailImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const DetailBox = styled.div`
  width: 700px;
  height: 280px;
  margin-left: 20px;
  margin-top: 200px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const OpenModalContainer = styled.div`
  display: flex;
`;

const OpenModalComment = styled.div`
  font-size: 40px;
  margin-left: 20px;
  padding: 20px;
`;

const OpenModal = styled.div`
  width: 140px;
  height: 90px;
  margin-left: 80px;
  background-image: url(${AddImg});
  background-size: cover;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  font-size: 50px;
  margin: 20px;
`;
