import { useState } from "react";
import { Todo, editTodo } from "../redux/modules/todoSlice";
import { useAppDispatch, useAppSelector } from "../hooks";
import { RootState } from "../redux/config/configStore";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { todos } = useAppSelector((state: RootState) => state.todos);
  const todo: Todo | undefined = todos.find((todo) => todo.id === id);
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [title, setTitle] = useState<string>(todo?.title || "");
  const [content, setContent] = useState<string>(todo?.content || "");

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const backButton = () => {
    navigate("/");
  };

  const editButton = (todo: Todo) => {
    setIsEdit(!isEdit);

    const editedTodo = {
      ...todo,
      title,
      content,
    };

    dispatch(editTodo(editedTodo));
  };

  if (!todo) {
    return <h2>찾는 투두가 없쪙</h2>;
  } else
    return (
      <>
        <div
          style={{
            border: "1px solid black",
            padding: "10px",
            margin: "10px",
          }}
        >
          <button onClick={backButton}>금쪽아~ 밥 먹어라~</button>
          {isEdit ? (
            <>
              <h2>
                <input value={title} onChange={onChangeTitle} />
              </h2>
              <div>
                <input value={content} onChange={onChangeContent} />
              </div>
            </>
          ) : (
            <>
              <h2>{todo.title}</h2>
              <div>{todo.content}</div>
            </>
          )}
          <button onClick={() => editButton(todo)}>
            {isEdit ? "바꿀게요" : "계획을 전면 수정한다..."}
          </button>
        </div>
      </>
    );
};
export default Detail;
