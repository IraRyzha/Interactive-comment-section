const setComments = async (dispatch, comments) => {
  dispatch({ type: "FETCH_COMMENTS", payload: { comments } });
};

const addComment = (dispatch, inputText) => {
  dispatch({ type: "ADD_COMMENT", payload: { inputText } });
};

const deleteComment = (dispatch, deleteCommentId) => {
  dispatch({ type: "DELETE_COMMENT", payload: { deleteCommentId } });
};

const editComment = (dispatch, editCommentId, newText) => {
  dispatch({ type: "EDIT_COMMENT", payload: { editCommentId, newText } });
};

const replyToComment = (dispatch, payload) => {
  dispatch({
    type: "REPLY_TO_COMMENT",
    payload,
  });
};

const incrementVoteToComment = (dispatch, voteToId, userName) => {
  console.log("votesToComment work");
  dispatch({
    type: "VOTES_TO_COMMENT",
    payload: { voteToId, isIncrement: true, userName },
  });
};

const decrementVoteToComment = (dispatch, voteToId, userName) => {
  console.log("votesToComment work");
  dispatch({
    type: "VOTES_TO_COMMENT",
    payload: { voteToId, isIncrement: false, userName },
  });
};

export {
  setComments,
  addComment,
  editComment,
  deleteComment,
  replyToComment,
  incrementVoteToComment,
  decrementVoteToComment,
};
