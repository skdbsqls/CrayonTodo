import { useState } from "react";
import Input from "../Input";
import * as S from "../../styles/StDetail";

const Default: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen && <Input isOpen={isOpen} setIsOpen={setIsOpen} />}
      <S.DetailLayout>
        <S.OpenModalContainer>
          <S.OpenModal onClick={openModal} />
          <S.OpenModalComment>임무를 작성하라!</S.OpenModalComment>
        </S.OpenModalContainer>
        <S.DetailContainer>
          <S.DetailBox>
            <S.Title style={{ marginTop: "420px" }}>
              크레파스를 클릭해보세요!
            </S.Title>
          </S.DetailBox>
        </S.DetailContainer>
      </S.DetailLayout>
    </>
  );
};
export default Default;
