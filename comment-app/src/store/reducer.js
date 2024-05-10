const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return {
        ...state,
        comments: [...action.payload.comments],
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload.comment],
      };
    case "EDIT_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            const updatedComment = { ...comment };
            updatedComment.text = action.payload.newText;
            return updatedComment;
          } else {
            return comment;
          }
        }),
      };
    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload.commentId
        ),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
