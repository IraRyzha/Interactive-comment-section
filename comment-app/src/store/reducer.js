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
    case "DELETE_COMMENT":
      console.log("DELETE_COMMENT work");
      return {
        ...state,
        comments: state.comments.filter((comment) => {
          // comment.replies.filter(
          //   (reply) => reply.id !== action.payload.commentId
          // );
          return comment.id !== action.payload.commentId;
        }),
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
    case "REPLY_TO_COMMENT":
      console.log("REPLY_TO_COMMENT work");
      const toComment = state.comments.map((comment) =>
        comment.id === action.payload.toCommentId ? comment : null
      );

      console.log(toComment);
      // let updatedComment = { ...toComment };
      // console.log(updatedComment.replies);
      // updatedComment.replies = [
      //   ...updatedComment.replies,
      //   action.payload.repliedComment,
      // ];

      // console.log(updatedComment);
      console.log(action.payload.toCommentId);
      console.log(action.payload.repliedComment);
      return {
        ...state,
        // comments: [
        //   ...state.comments.map((comment) =>
        //     comment.id !== action.payload.toCommentId ? comment : updatedComment
        //   ),
        // ],
        // comments: [...updatedComments],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
