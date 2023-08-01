import { useEffect, useState } from "react";
import Input from "./Input";
import {
  Todo,
  deleteTodo,
  editTodo,
  setTodo,
  toggleTodo,
} from "../redux/modules/todoSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import * as S from "../styles/StyleDetail";

const Detail: React.FC = () => {
  const dispatch = useAppDispatch();
  const { detailTodo } = useAppSelector((state) => state.todos);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [editTitle, editSetTitle] = useState<string>("");
  const [editContent, setEditContent] = useState<string>("");

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    editSetTitle(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditContent(event.target.value);
  };

  useEffect(() => {
    if (isEdit) {
      editSetTitle(detailTodo?.title as string);
      setEditContent(detailTodo?.content as string);
    }
  }, [isEdit]);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const editButton = (todo: Todo) => {
    console.log("todo", todo);
    if (isEdit) {
      setIsEdit(!isEdit);

      const editedTodo = {
        ...todo,
        title: editTitle,
        content: editContent,
      };

      dispatch(editTodo(editedTodo));
      dispatch(setTodo(editedTodo));
    } else {
      setIsEdit(!isEdit);
    }
  };

  const deleteButton = (id: string): void => {
    dispatch(deleteTodo(id));
  };

  const toggleButton = (id: string): void => {
    dispatch(toggleTodo(id));
  };

  if (!detailTodo) {
    return <div>투두 없음</div>;
  }
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
            {/* <div onClick={() => toggleButton(todo.id)}>
            {todo.isDone ? "임수를 완수했다!" : "임수를 수행하라!"}
          </div> */}
            {/* <False></False> */}
            {isEdit ? (
              <>
                <S.EditInput value={editTitle} onChange={onChangeTitle} />
                <S.EditInput value={editContent} onChange={onChangeContent} />
              </>
            ) : (
              <>
                <S.Title>{detailTodo.title}</S.Title>
                <S.Content>{detailTodo.content}</S.Content>
              </>
            )}
          </S.DetailBox>
          <S.ButtonContainer>
            <S.EditButton onClick={() => editButton(detailTodo)}>
              {isEdit ? "저장" : "수정"}
            </S.EditButton>
            <S.DeleteButton onClick={() => deleteButton(detailTodo.id)}>
              삭제
            </S.DeleteButton>
          </S.ButtonContainer>
        </S.DetailContainer>
      </S.DetailLayout>
    </>
  );
};
export default Detail;
