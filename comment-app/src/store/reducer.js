const findComment = (comments, foundId) => {
  console.log("Recursive work");
  console.log(comments);
  for (let comment of comments) {
    if (comment.id === foundId) {
      console.log("Find comment!");
      console.log(comment);
      return comment;
    }
    if (Array.isArray(comment.replies)) {
      console.log("Find in replies!");
      const foundComment = findComment(comment.replies, foundId);
      if (foundComment) {
        return foundComment;
      }
    }
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_COMMENTS":
      return {
        ...state,
        comments: [...action.payload.comments],
      };
    case "ADD_COMMENT":
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
      const filterComment = (comments, deletedId) => {
        for (let comment of comments) {
          if (comment.id !== deletedId) {
            return comment;
          }
          if (Array.isArray(comment.replies)) {
            console.log("Find in replies!");
            const foundComment = filterComment(comment.replies, foundId);
            if (foundComment) {
              return foundComment;
            }
          }
        }
      };

      const filteredComments = filterComment(
        [...state.comments],
        action.payload.commentId
      );

      return {
        ...state,
        comments: [...filteredComments],
        // state.comments.filter((comment) => {
        //   comment.replies = comment.replies.filter(
        //     (reply) => reply.id !== action.payload.commentId
        //   );
        //   return comment.id !== action.payload.commentId;
        // }),
      };
    case "EDIT_COMMENT":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === action.payload.commentId) {
            const updatedComment = { ...comment };
            comment.text = action.payload.newText;
            return updatedComment;
          } else {
            return comment;
          }
        }),
      };
    case "REPLY_TO_COMMENT":
      const repliedComment = {
        id: action.payload.repliedCommentId,
        text: action.payload.inputText,
        author: {
          name: "MyProfile",
          photo: "https://api.lorem.space/image/face?w=150&h=150",
        },
        date: "yesterday",
        votes: 0,
        replies: [],
      };

      const toComment = findComment(
        [...state.comments],
        action.payload.toCommentId
      );
      console.log(toComment);

      const existingReply = toComment.replies.find(
        (reply) => reply.id === action.payload.repliedCommentId
      );
      if (!existingReply) {
        toComment.replies.push({ ...repliedComment });
      }

      return {
        ...state,
        comments: [...state.comments],
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
