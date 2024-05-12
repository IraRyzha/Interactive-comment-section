import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { replyToComment } from "../store/actions";
import ProfileImage from "./comment/ProfileImage";
import UiButton from "./ui/ui-button";

function ReplyCommentForm({ toComment, setIsReplying }) {
  const { dispatch, user, newCommentId, setNewCommentId } =
    useContext(MainContext);
  const [inputText, setInputText] = useState("");

  const repliedComment = {
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

  const handleReply = () => {
    if (inputText.length < 1) {
      return 1;
    }
    replyToComment(dispatch, toComment, repliedComment);
    setNewCommentId((prev) => prev + 1);
    setInputText("");
    setIsReplying(false);
  };

  return (
    <div className="w-full h-auto p-2 flex items-start justify-center gap-5 bg-white border-2">
      <ProfileImage photo={user.photo} />
      <input
        maxlength="320"
        type="text"
        className="flex-1 h-full min-h-14 border-2 rounded-lg"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <UiButton type="base" onClick={handleReply}>
        REPLY
      </UiButton>
    </div>
  );
}

export default ReplyCommentForm;
