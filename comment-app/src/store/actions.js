const setComments = async (dispatch, comments) => {
  dispatch({ type: "FETCH_COMMENTS", payload: { comments } });
};

const addComment = (dispatch, newCommentId, inputText) => {
  dispatch({ type: "ADD_COMMENT", payload: { newCommentId, inputText } });
};

const deleteComment = (dispatch, commentId) => {
  dispatch({ type: "DELETE_COMMENT", payload: { commentId } });
};

const editComment = (dispatch, commentId, newText) => {
  dispatch({ type: "EDIT_COMMENT", payload: { commentId, newText } });
};

const replyToComment = (dispatch, toCommentId, repliedCommentId, inputText) => {
  dispatch({
    type: "REPLY_TO_COMMENT",
    payload: { toCommentId, repliedCommentId, inputText },
  });
};

const votesToComment = (dispatch, toCommentId, symbol) => {
  let isIncrement;
  switch (symbol) {
    case "+":
      isIncrement = true;
      break;
    case "-":
      isIncrement = false;
      break;
  }
  console.log(toCommentId, symbol);
  dispatch({
    type: "VOTES_TO_COMMENT",
    payload: { toCommentId, isIncrement },
  });
};

export {
  setComments,
  addComment,
  editComment,
  deleteComment,
  replyToComment,
  votesToComment,
};
