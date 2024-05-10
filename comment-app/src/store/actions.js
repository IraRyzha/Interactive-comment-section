import getComments from "../services/getComments";

const fetchComments = async (dispatch) => {
  const comments = await getComments();
  dispatch({ type: "FETCH_COMMENTS", payload: { coments } });
};

const addComment = (dispatch, comment) => {
  dispatch({ type: "ADD_COMMENT", payload: { comment } });
};

const editComment = (dispatch, commentId, newText) => {
  dispatch({ type: "EDIT_COMMENT", payload: { commentId, newText } });
};

const deleteComment = (dispatch, commentId) => {
  dispatch({ type: "DELETE_COMMENT", payload: { commentId } });
};

export { fetchComments, addComment, editComment, deleteComment };
