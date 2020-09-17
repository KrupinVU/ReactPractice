const comments = (state = [], action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return [
        ...state,
        { id: action.id, author: action.author, text: action.text },
      ];

    case "REMOVE_COMMENT":
      return [
        ...state.filter((comment) => {
          return comment.id !== action.id;
        }),
      ];

    default:
      return state;
  }
};
export default comments;
