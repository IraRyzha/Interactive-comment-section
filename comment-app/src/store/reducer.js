const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      const { comments } = action.payload;
      return {
        ...state,
        comments: [...comments],
      };
    case "ADD_COMMENT":
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
            votes: [],
            replies: [],
          },
        ],
      };
    case "DELETE_COMMENT":
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
      const { editCommentId, newText } = action.payload;
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === editCommentId) {
            return {
              ...comment,
              text: newText,
            };
          } else {
            return {
              ...comment,
              replies: comment.replies.map((reply) => {
                if (reply.id === editCommentId) {
                  return {
                    ...reply,
                    text: newText,
                  };
                } else {
                  return reply;
                }
              }),
            };
          }
        }),
      };
    case "REPLY_TO_COMMENT":
      const { replyToId, replyToName, repliedCommentId, repliedText } =
        action.payload;
      const repliedComment = {
        id: repliedCommentId,
        text: repliedText,
        author: {
          name: "MyProfile",
          photo: "https://api.lorem.space/image/face?w=150&h=150",
        },
        date: "now",
        votes: [],
        replyToId,
        replyToName,
      };

      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === replyToId) {
            return {
              ...comment,
              replies: [...comment.replies, repliedComment],
            };
          }
          return comment;
        }),
      };
    case "VOTES_TO_COMMENT":
      const { voteToId, isIncrement, userName } = action.payload;
      const updatedComments = state.comments.map((comment) => {
        if (comment.id === voteToId) {
          const isAlreadyVote = comment.votes.includes(userName);
          if (isIncrement && !isAlreadyVote) {
            return {
              ...comment,
              votes: [...comment.votes, userName],
            };
          } else if (!isIncrement) {
            return {
              ...comment,
              votes: comment.votes.filter((user) => user !== userName),
            };
          }
        } else if (Array.isArray(comment.replies)) {
          const updatedReplies = comment.replies.map((reply) => {
            if (reply.id === voteToId) {
              const isAlreadyVote = reply.votes.includes(userName);
              if (isIncrement && !isAlreadyVote) {
                return {
                  ...reply,
                  votes: [...reply.votes, userName],
                };
              } else if (!isIncrement) {
                return {
                  ...reply,
                  votes: reply.votes.filter((user) => user !== userName),
                };
              }
            }
            return reply;
          });

          return {
            ...comment,
            replies: updatedReplies,
          };
        }
        return comment;
      });

      return {
        ...state,
        comments: updatedComments,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
