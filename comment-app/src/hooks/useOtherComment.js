import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { votesToComment } from "../store/actions";

const useOtherComment = (comment) => {
  const { dispatch } = useContext(MainContext);
  const [isReplying, setIsReplying] = useState(false);

  const handleVotes = (symbol) => {
    votesToComment(dispatch, comment.id, symbol);
  };

  return {
    isReplying,
    setIsReplying,
    handleVotes,
  };
};

export default useOtherComment;
