import React, { useState } from "react";
import * as S from "../styles/StInput";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { Todo, addTodo, getTodos } from "../axios/api";

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

  // Todo 조회
  const { data: todos = [] } = useQuery<Todo[]>("todos", getTodos);

  // Todo 추가
  const queryClient = useQueryClient();
  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const addButton = () => {
    // Todo 개수 설정
    if (todos.length >= 8) {
      alert("짱구의 크레파스는 8개!");
      setIsOpen(!isOpen);
      return false;
    }
    // 유효성 검사
    if (!title || !content) {
      return alert("제목과 내용을 모두 입력해주세요");
    }
    if (title.length >= 12) {
      return alert("내용은 12글자 이하로 입력해주세요");
    }
    if (content.length >= 50) {
      return alert("제목은 50글자 이하로 입력해주세요");
    }
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
        <S.StInput
          value={title}
          onChange={onChangeTitle}
          placeholder="12글자 이하"
        />
        내용
        <S.StTextArea
          value={content}
          onChange={onChangeContent}
          placeholder="50글자 이하"
        />
        <S.StButton onClick={addButton}>추가</S.StButton>
      </S.InputBox>
    </S.InputContainer>
  );
};

export default Input;
