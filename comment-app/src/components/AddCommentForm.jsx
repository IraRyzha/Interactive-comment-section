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
    <div className="w-full h-auto p-2 flex items-start justify-center gap-5 bg-white text-wrap break-all border-2">
      <ProfileImage photo={user.photo} />
      <input
        maxLength="320"
        type="text"
        className="flex-1 h-full min-h-14 border-2 rounded-lg"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <UiButton type="base" onClick={handleSend}>
        SEND
      </UiButton>
    </div>
  );
}

export default AddCommentForm;
