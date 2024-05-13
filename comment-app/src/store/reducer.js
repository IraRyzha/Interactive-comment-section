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
      const filterComment = (comments, deletedId) => {
        for (let i = 0; i < comments.length; i++) {
          const comment = comments[i];
          if (comment.id === deletedId) {
            comments.splice(i, 1);
            return true;
          }
          if (Array.isArray(comment.replies)) {
            const foundInReplies = filterComment(comment.replies, deletedId);
            if (foundInReplies) return true;
          }
        }
        return false;
      };

      filterComment(state.comments, action.payload.commentId);

      return {
        ...state,
        comments: [...state.comments],
      };
    case "EDIT_COMMENT":
      console.log("EDIT_COMMENT");
      const editCommentRecursive = (comments, commentId, newText) => {
        return comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, text: newText };
          } else if (Array.isArray(comment.replies)) {
            return {
              ...comment,
              replies: editCommentRecursive(
                comment.replies,
                commentId,
                newText
              ),
            };
          }
          return comment;
        });
      };

      const editedComments = editCommentRecursive(
        state.comments,
        action.payload.commentId,
        action.payload.newText
      );
      return {
        ...state,
        comments: editedComments,
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
        date: "yesterday",
        votes: 0,
        replies: [],
      };

      const findComment = (comments, foundId) => {
        for (let comment of comments) {
          if (comment.id === foundId) {
            return comment;
          }
          if (Array.isArray(comment.replies)) {
            const foundComment = findComment(comment.replies, foundId);
            if (foundComment) {
              return foundComment;
            }
          }
        }
      };

      const toComment = findComment(
        [...state.comments],
        action.payload.toCommentId
      );

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
      console.log("VOTES_TO_COMMENT");
      const updateVotesRecursive = (comments, toCommentId, isIncrement) => {
        return comments.map((comment) => {
          if (comment.id === toCommentId) {
            comment.votes += isIncrement ? 0.5 : -0.5;
          }
          if (Array.isArray(comment.replies) && comment.replies.length > 0) {
            comment.replies = updateVotesRecursive(
              comment.replies,
              toCommentId,
              isIncrement
            );
          }
          return comment;
        });
      };

      const updatedComments = updateVotesRecursive(
        state.comments,
        action.payload.toCommentId,
        action.payload.isIncrement
      );

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
