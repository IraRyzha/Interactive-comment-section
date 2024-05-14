const setComments = async (dispatch, comments) => {
  dispatch({ type: "FETCH_COMMENTS", payload: { comments } });
};

const addComment = (dispatch, newCommentId, inputText) => {
  dispatch({ type: "ADD_COMMENT", payload: { newCommentId, inputText } });
};

const deleteComment = (dispatch, deleteCommentId) => {
  dispatch({ type: "DELETE_COMMENT", payload: { deleteCommentId } });
};

const editComment = (dispatch, editCommentId, newText) => {
  dispatch({ type: "EDIT_COMMENT", payload: { editCommentId, newText } });
};

const replyToComment = (
  dispatch,
  replyToCommentId,
  replyToCommentName,
  repliedCommentId,
  repliedText
) => {
  dispatch({
    type: "REPLY_TO_COMMENT",
    payload: {
      replyToCommentId,
      replyToCommentName,
      repliedCommentId,
      repliedText,
    },
  });
};

const votesToComment = (dispatch, voteToCommentId, symbol) => {
  console.log("votesToComment work");
  dispatch({
    type: "VOTES_TO_COMMENT",
    payload: { voteToCommentId, isIncrement: symbol === "+" ? true : false },
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
