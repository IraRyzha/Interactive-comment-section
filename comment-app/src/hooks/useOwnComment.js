import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { deleteComment, editComment } from "../store/actions";

const useOwnComment = () => {
  const { dispatch } = useContext(MainContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = (commentId) => {
    deleteComment(dispatch, commentId);
  };

  const handleUpdate = (commentId, inputText) => {
    if (inputText.length < 1) {
      return 1;
    }
    editComment(dispatch, commentId, inputText);
    setIsEditing(false);
  };

  return {
    isEditing,
    setIsEditing,
    isOpen,
    setIsOpen,
    handleDelete,
    handleUpdate,
  };
};

export default useOwnComment;
