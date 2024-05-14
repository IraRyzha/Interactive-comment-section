const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      const { comments } = action.payload;
      return {
        ...state,
        comments: [...comments],
      };
    case "ADD_COMMENT":
      console.log("ADD_COMMENT");
      const { newCommentId, inputText } = action.payload;
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
            id: newCommentId,
            text: inputText,
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
      const { deleteCommentId } = action.payload;
      return {
        ...state,
        comments: state.comments
          .filter((comment) => comment.id !== deleteCommentId)
          .map((comment) => {
            return {
              ...comment,
              replies: comment.replies.filter(
                (reply) => reply.id !== deleteCommentId
              ),
            };
          }),
      };
    case "EDIT_COMMENT":
      console.log("EDIT_COMMENT");
      const { editCommentId, newText } = action.payload;
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === editCommentId) {
            comment.text = newText;
            return comment;
          } else {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === editCommentId) {
                  reply.text = newText;
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
      const {
        replyToCommentId,
        replyToCommentName,
        repliedCommentId,
        repliedText,
      } = action.payload;
      const repliedComment = {
        id: repliedCommentId,
        text: repliedText,
        author: {
          name: "MyProfile",
          photo: "https://api.lorem.space/image/face?w=150&h=150",
        },
        date: "now",
        votes: 0,
        replyToId: replyToCommentId,
        replyToName: replyToCommentName,
      };

      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === replyToCommentId) {
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
      const { voteToCommentId, isIncrement } = action.payload;
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === voteToCommentId) {
            comment.votes += isIncrement ? 0.5 : -0.5;
            return comment;
          } else {
            if (Array.isArray(comment.replies)) {
              return {
                ...comment,
                replies: comment.replies.map((reply) => {
                  if (reply.id === voteToCommentId) {
                    reply.votes += isIncrement ? 0.5 : -0.5;
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
