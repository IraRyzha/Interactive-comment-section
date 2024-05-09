import getComments from "../services/getComments";

const fetchComments = async (dispatch) => {
  const comments = await getComments();
  dispatch({ type: "FETCH_COMMENTS", payload: { coments: [...comments] } });
};

const addComment = (dispatch, comment) => {
  dispatch({ type: "ADD_COMMENT", payload: { comment: { ...comment } } });
};

export { fetchComments, addComment };
