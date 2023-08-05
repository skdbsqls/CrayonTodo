import { useState } from "react";
import * as S from "../styles/StDetail";
import Input from "./Input";
import { Todo, deleteTodo, editTodo, toggleTodo } from "../axios/api";
import { useMutation, useQueryClient } from "react-query";

interface DetailProps {
  todo: Todo;
  setTodo: React.Dispatch<React.SetStateAction<Todo | null>>;
}

const Detail: React.FC<DetailProps> = ({ todo, setTodo }) => {
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTitle, setEditTitle] = useState<string>("");
  const [editContent, setEditContent] = useState<string>("");
  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditTitle(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(event.target.value);
  };

  // Input 모달
  const openModal = () => {
    setIsOpen(!isOpen);
  };

  // Todo 삭제
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const deleteButton = (id: number): void => {
    alert("진짜 삭제할거야?");
    deleteMutation.mutate(id);
    setTodo(null);
  };

  // Todo 수정
  const editMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const editButton = (todo: Todo) => {
    setIsEdit(!isEdit);
    // 유효성 검사
    if (editTitle.length >= 12) {
      return alert("제목은 12글자 이하로 입력해주세요");
    }
    if (editContent.length >= 50) {
      return alert("내용은 50글자 이하로 입력해주세요");
    }
    if (!isEdit) {
      setEditTitle(todo?.title);
      setEditContent(todo?.content);
    } else {
      const editedTodo = {
        ...todo,
        title: editTitle,
        content: editContent,
      };
      editMutation.mutate(editedTodo);
      setTodo(editedTodo);
      setIsEdit(!isEdit);
    }
  };

  // Todo 토글
  const updateMutation = useMutation(toggleTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const toggleButton = (todo: Todo): void => {
    const updatedTodo = {
      ...todo,
      isDone: !todo.isDone,
    };
    updateMutation.mutate(updatedTodo);
    setTodo(updatedTodo);
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
          {todo.isDone ? (
            <S.FalseButton onClick={() => toggleButton(todo)} />
          ) : (
            <S.DoneButton onClick={() => toggleButton(todo)} />
          )}
          <S.DetailBox>
            {isEdit ? (
              <>
                <S.EditInput value={editTitle} onChange={onChangeTitle} />
                <S.EditInput value={editContent} onChange={onChangeContent} />
              </>
            ) : (
              <>
                <S.Title>{todo.title}</S.Title>
                <S.Content>{todo.content}</S.Content>
              </>
            )}
          </S.DetailBox>
          <S.ButtonContainer>
            <S.EditButton onClick={() => editButton(todo)}>
              {isEdit ? "저장" : "수정"}
            </S.EditButton>
            <S.DeleteButton onClick={() => deleteButton(todo.id)}>
              삭제
            </S.DeleteButton>
          </S.ButtonContainer>
        </S.DetailContainer>
      </S.DetailLayout>
    </>
  );
};
export default Detail;
