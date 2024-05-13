import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { replyToComment, votesToComment } from "../store/actions";

const useOtherComment = (comment) => {
  const { dispatch, newCommentId, setNewCommentId } = useContext(MainContext);
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = (inputText) => {
    if (inputText.length < 1) {
      return 1;
    }
    if (comment.replyToId) {
      replyToComment(
        dispatch,
        comment.replyToId,
        comment.replyToName,
        newCommentId,
        inputText
      );
    } else {
      replyToComment(
        dispatch,
        comment.id,
        comment.author.name,
        newCommentId,
        inputText
      );
    }
    setNewCommentId((prev) => prev + 1);
    setIsReplying(false);
  };

  const handleVotes = (symbol) => {
    console.log("handleVotes");
    votesToComment(dispatch, comment.id, symbol);
  };

  return {
    isReplying,
    setIsReplying,
    handleReply,
    handleVotes,
  };
};

export default useOtherComment;
