import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { deleteComment, editComment } from "../store/actions";

const useComment = (comment) => {
  const { dispatch, user } = useContext(MainContext);
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [inputText, setInputText] = useState("");
  const [commentId, setCommentId] = useState(10);

  const repliedComment = {
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

  const handleDelete = () => {
    console.log("handleDelete work");
    console.log(comment.id);
    deleteComment(dispatch, comment.id);
  };

  const handleEdit = () => {
    setInputText(comment.text);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    if (inputText.length < 1) {
      return 1;
    }
    editComment(dispatch, comment.id, inputText);
    setIsEditing(false);
  };

  const handleReply = () => {
    if (inputText.length < 1) {
      return 1;
    }
    console.log("handleReply work");
    replyToComment(dispatch, comment.id, repliedComment);
    setCommentId((prev) => prev + 1);
    setInputText("");
    setIsReplying(false);
  };

  return {
    inputText,
    setInputText,
    isEditing,
    setIsEditing,
    isReplying,
    setIsReplying,
    isOpen,
    setIsOpen,
    handleDelete,
    handleEdit,
    handleUpdate,
    handleReply,
  };
};

export default useComment;
