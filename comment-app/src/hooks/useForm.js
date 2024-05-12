import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { addComment, replyToComment } from "../store/actions";

const useForm = () => {
  const { dispatch, user } = useContext(MainContext);
  const [inputText, setInputText] = useState("");
  const [commentId, setCommentId] = useState(10);

  const comment = {
    id: commentId,
    text: inputText,
    author: {
      name: user.name,
      photo: user.photo,
    },
    date: "yesterday",
    votes: 0,
    replies: [],
  };

  const handleSend = () => {
    if (inputText.length < 1) {
      return 1;
    }
    addComment(dispatch, comment);
    setInputText("");
    setCommentId((prev) => prev + 1);
  };

  return {
    inputText,
    setInputText,
    handleSend,
    user,
  };
};

export default useForm;
