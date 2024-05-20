import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { deleteComment, editComment } from "../store/actions";

const useOwnComment = (comment) => {
  const { dispatch } = useContext(MainContext);
  const [inputText, setInputText] = useState(
    comment.replyToId
      ? "@" + comment.replyToName + " " + comment.text
      : comment.text
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = () => {
    deleteComment(dispatch, comment.id);
  };

  const handleUpdate = () => {
    if (inputText.length < 1) {
      return 1;
    }
    editComment(
      dispatch,
      comment.id,
      [...inputText].slice([...comment.replyToName].length + 1)
    );
    setIsEditing(false);
  };

  return {
    inputText,
    setInputText,
    isEditing,
    setIsEditing,
    isOpen,
    setIsOpen,
    handleDelete,
    handleUpdate,
  };
};

export default useOwnComment;
