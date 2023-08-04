import React, { useState } from "react";
import * as S from "../styles/StInput";
import { useMutation, useQueryClient } from "react-query";
import { Todo, addTodo } from "../axios/api";

interface InputProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Input: React.FC<InputProps> = ({ isOpen, setIsOpen }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

  // Todo 추가
  const queryClient = useQueryClient();
  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const addButton = () => {
    const newTodo: Omit<Todo, "id"> = {
      title,
      content,
      isDone: false,
    };
    addMutation.mutate(newTodo);
    setTitle("");
    setContent("");
    setIsOpen(!isOpen);
  };

  // 모달창 닫기
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
