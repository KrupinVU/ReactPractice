import React from "react";

const AddComment = ({ addComment }) => {
  let author;
  return (
    <React.Fragment>
      <p>
        <b>Автор</b>
      </p>
      <input
        type="text"
        placeholder="Введите имя"
        onChange={(e) => {
          return (author = e.target.value);
        }}
        onBlur={(e) => {
          e.target.value = "";
        }}
      />
      <br />
      <p>
        <b>Текст комментария</b>
      </p>
      <textarea
        placeholder="Ваш комментарий..."
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addComment(author, e.target.value);
            e.target.value = "";
            author = "";
          }
        }}
      />
    </React.Fragment>
  );
};

export default AddComment;
