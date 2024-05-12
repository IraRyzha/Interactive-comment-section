import getComments from "../services/getComments";

const fetchComments = async (dispatch) => {
  const comments = await getComments();
  dispatch({ type: "FETCH_COMMENTS", payload: { comments } });
};

const addComment = (dispatch, comment) => {
  dispatch({ type: "ADD_COMMENT", payload: { comment } });
};

const deleteComment = (dispatch, commentId) => {
  dispatch({ type: "DELETE_COMMENT", payload: { commentId } });
};

const editComment = (dispatch, commentId, newText) => {
  dispatch({ type: "EDIT_COMMENT", payload: { commentId, newText } });
};

const replyToComment = (dispatch, toCommentId, repliedComment) => {
  console.log("replyToComment work");
  dispatch({
    type: "REPLY_TO_COMMENT",
    payload: { toCommentId, repliedComment },
  });
};

export {
  fetchComments,
  addComment,
  editComment,
  deleteComment,
  replyToComment,
};
