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
      return {
        ...state,
        comments: state.comments.filter((comment) => {
          comment.replies = comment.replies.filter(
            (reply) => reply.id !== action.payload.commentId
          );
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
      let toComment = state.comments.find(
        (comment) => comment.id === action.payload.toCommentId
      );
      let updatedComment;

      if (toComment !== null || toComment !== undefined) {
        updatedComment = { ...toComment };
        updatedComment.replies = [
          ...updatedComment.replies,
          action.payload.repliedComment,
        ];
      } else {
        state.comments.forEach((comment) => {
          toComment = comment.replies.find(
            (reply) => reply.id === action.payload.toCommentId
          );
          updatedComment = { ...toComment };
          updatedComment.replies = [
            ...updatedComment.replies,
            action.payload.repliedComment,
          ];
        });
      }

      return {
        ...state,
        comments: [
          ...state.comments.map((comment) =>
            comment.id !== action.payload.toCommentId ? comment : updatedComment
          ),
        ],
      };
    case "VOTES_TO_COMMENT":
      const updatedComments = [...state.comments];
      updatedComments.forEach((comment) => {
        if (comment.id === action.payload.toCommentId) {
          comment.votes = action.payload.isIncrement
            ? comment.votes + 1
            : comment.votes - 1;
        } else {
          if (comment.replies.length > 1) {
            comment.replies.forEach((reply) => {
              console.log(reply);
              if (reply.id === action.payload.toCommentId) {
                reply.votes = action.payload.isIncrement
                  ? reply.votes + 1
                  : reply.votes - 1;
              }
            });
          }
        }
      });
      return {
        ...state,
        comments: [...updatedComments],
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
