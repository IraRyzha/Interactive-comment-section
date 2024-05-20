import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import {
  decrementVoteToComment,
  incrementVoteToComment,
  replyToComment,
} from "../store/actions";

const useOtherComment = (comment) => {
  const { dispatch, user } = useContext(MainContext);
  const [isReplying, setIsReplying] = useState(false);

  const handleReply = (inputText) => {
    if (inputText.length < 1) {
      return 1;
    }
    const payload = {
      replyToId: comment.replyToId ?? comment.id,
      replyToName: comment.author.name,
      repliedText: inputText,
    };
    replyToComment(dispatch, payload);
    setIsReplying(false);
  };

  const handleIncrementVotes = () => {
    incrementVoteToComment(dispatch, comment.id, user.name);
  };

  const handleDecrementVotes = () => {
    decrementVoteToComment(dispatch, comment.id, user.name);
  };

  return {
    isReplying,
    setIsReplying,
    handleReply,
    handleIncrementVotes,
    handleDecrementVotes,
  };
};

export default useOtherComment;
