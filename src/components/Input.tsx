import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todoSlice";
import * as S from "../styles/StyleInput";
import { useNavigate } from "react-router-dom";

interface InputProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input: React.FC<InputProps> = ({ isOpen, setIsOpen }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  const addButton = () => {
    const newTodo = {
      id: shortid.generate(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
    setIsOpen(!isOpen);
  };

  const backButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.InputContainer>
      <S.InputBox>
        <S.StButton onClick={backButton}>X</S.StButton>
        제목
        <S.StInput value={title} onChange={onChangeTitle} />
        내용
        <S.StTextArea value={content} onChange={onChangeContent} />
        <S.StButton onClick={addButton}>추가</S.StButton>
      </S.InputBox>
    </S.InputContainer>
  );
};

export default Input;
