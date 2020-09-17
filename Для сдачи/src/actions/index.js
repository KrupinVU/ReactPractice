let nextCommentId = localStorage.getItem("lastCommentId")
  ? JSON.parse(localStorage.getItem("lastCommentId")) + 1
  : 1;

localStorage.setItem("lastCommentId", nextCommentId);

export const addComment = (author, text) => {
  const curDate = new Date();
  return {
    type: "ADD_COMMENT",
    id: nextCommentId++,
    author: author,
    text: text,
    date: `Опубликовано: ${curDate.getDay()}-${curDate.getMonth()}-${curDate.getFullYear()} года, ${curDate.getHours()}:${curDate.getMinutes()}`,
  };
};

export const removeComment = (id) => {
  return {
    type: "REMOVE_COMMENT",
    id,
  };
};
