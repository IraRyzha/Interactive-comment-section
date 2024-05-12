import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { addComment } from "../store/actions";

const useForm = () => {
  const { dispatch, user, newCommentId, setNewCommentId } =
    useContext(MainContext);
  const [inputText, setInputText] = useState("");

  const comment = {
    id: newCommentId,
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
    setNewCommentId((prev) => prev + 1);
  };

  return {
    inputText,
    setInputText,
    newCommentId,
    setNewCommentId,
    handleSend,
    user,
  };
};

export default useForm;
