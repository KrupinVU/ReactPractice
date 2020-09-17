import React from "react";

const CommentsList = (props) => {
  const { comments, removeComment } = props;
  return (
    <ul>
      {comments.map((comment) => {
        return (
          <li key={comment.id}>
            <p>{comment.text}</p>
            <p>
              <strong>Автор: {comment.author}</strong>
            </p>
            <p>
              <small>{comment.date}</small>
            </p>
            <button onClick={() => removeComment(comment.id)}>
              Удалить комментарий
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CommentsList;
