const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return {
        ...state,
        comments: [...action.payload.comments],
      };
    case "ADD_COMMENT":
      console.log("ADD_COMMENT");
      const currentDate = new Date();
      const commentDate =
        String(currentDate.getHours()).padStart(2, "0") +
        ":" +
        String(currentDate.getMinutes()).padStart(2, "0");
      return {
        ...state,
        comments: [
          ...state.comments,
          {
            id: action.payload.newCommentId,
            text: action.payload.inputText,
            author: {
              name: "MyProfile",
              photo: "https://api.lorem.space/image/face?w=150&h=150",
            },
            date: commentDate,
            votes: 0,
            replies: [],
          },
        ],
      };
    case "DELETE_COMMENT":
      console.log("DELETE_COMMENT");
      return {
        ...state,
        comments: state.comments
          .filter((comment) => comment.id !== action.payload.commentId)
          .map((comment) => {
            return {
              ...comment,
              replies: comment.replies.filter(
                (reply) => reply.id !== action.payload.commentId
              ),
            };
          }),
      };
    case "EDIT_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            comment.text = action.payload.newText;
            return comment;
          } else {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === action.payload.commentId) {
                  reply.text = action.payload.newText;
                  return reply;
                } else {
                  return reply;
                }
              }),
            };
          }
        }),
      };
    case "REPLY_TO_COMMENT":
      console.log("REPLY_TO_COMMENT");
      const repliedComment = {
        id: action.payload.repliedCommentId,
        text: action.payload.inputText,
        author: {
          name: "MyProfile",
          photo: "https://api.lorem.space/image/face?w=150&h=150",
        },
        date: "now",
        votes: 0,
        replyToId: action.payload.toCommentId,
        replyToName: action.payload.toCommentName,
      };

      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.toCommentId) {
            return {
              ...comment,
              replies: [...comment.replies, repliedComment],
            };
          }
          return comment;
        }),
      };
    case "VOTES_TO_COMMENT":
      console.log("VOTES_TO_COMMENT");
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.toCommentId) {
            comment.votes += action.payload.isIncrement ? 0.5 : -0.5;
            return comment;
          } else {
            if (Array.isArray(comment.replies)) {
              return {
                ...comment,
                replies: comment.replies.map((reply) => {
                  if (reply.id === action.payload.toCommentId) {
                    reply.votes += action.payload.isIncrement ? 0.5 : -0.5;
                  }
                  return reply;
                }),
              };
            }
          }
        }),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
