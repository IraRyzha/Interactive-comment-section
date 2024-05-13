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

const replyToComment = (
  dispatch,
  toCommentId,
  toCommentName,
  repliedCommentId,
  inputText
) => {
  dispatch({
    type: "REPLY_TO_COMMENT",
    payload: { toCommentId, toCommentName, repliedCommentId, inputText },
  });
};

const votesToComment = (dispatch, toCommentId, symbol) => {
  console.log("votesToComment work");
  dispatch({
    type: "VOTES_TO_COMMENT",
    payload: { toCommentId, isIncrement: symbol === "+" ? true : false },
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
