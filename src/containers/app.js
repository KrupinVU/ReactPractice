import React from "react";
import { connect } from "react-redux";

import CommentsList from "../components/comments-list";
import AddComment from "../components/add-comment";
import { addComment, removeComment } from "../actions";

let App = (props) => {
  const { comments, addComment, removeComment } = props;
  return (
    <React.Fragment>
      <CommentsList comments={comments} removeComment={removeComment} />
      <AddComment addComment={addComment} />
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (author, text) => {
      dispatch(addComment(author, text));
    },
    removeComment: (id) => {
      dispatch(removeComment(id));
    },
  };
};

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
