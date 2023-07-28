import React, { useState } from "react";
import { useAppDispatch } from "../hooks";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todoSlice";

const Input = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const dispatch = useAppDispatch();
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
  };

  return (
    <div>
      제목 : <input value={title} onChange={onChangeTitle} />
      내용 : <input value={content} onChange={onChangeContent} />
      <button onClick={addButton}>추가</button>
    </div>
  );
};

export default Input;
