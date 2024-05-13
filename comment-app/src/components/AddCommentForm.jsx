import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { addComment } from "../store/actions";
import ProfileImage from "./comment/ProfileImage";
import UiButton from "./ui/ui-button";

function AddCommentForm() {
  const { dispatch, user, newCommentId, setNewCommentId } =
    useContext(MainContext);
  const [inputText, setInputText] = useState("");

  const handleSend = () => {
    if (inputText.length < 1) {
      return 1;
    }
    addComment(dispatch, newCommentId, inputText);
    setInputText("");
    setNewCommentId((prev) => prev + 1);
  };

  return (
    <div className="w-full h-full p-3 flex items-start justify-center gap-5 bg-white rounded-lg shadow-lg text-wrap break-all">
      <ProfileImage photo={user.photo} />
      <textarea
        maxLength="320"
        type="text"
        className="flex-1 h-full min-h-14 max-h-20 p-1 resize-y border-2 rounded-lg focus:outline-none focus:border-gray-500"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a comment..."
      />
      <UiButton type="base" onClick={handleSend}>
        SEND
      </UiButton>
    </div>
  );
}

export default AddCommentForm;
