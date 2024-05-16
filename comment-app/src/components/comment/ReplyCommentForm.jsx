import { useContext, useState } from "react";
import { MainContext } from "../../context/AppContext";
import ProfileImage from "./ProfileImage";
import UiButton from "../ui/ui-button";

function ReplyCommentForm({ handleReply }) {
  const { user } = useContext(MainContext);
  const [inputText, setInputText] = useState("");
  return (
    <div className="w-full h-auto p-2 flex items-start justify-center text-sm gap-5 bg-white rounded-lg border-2">
      <ProfileImage photo={user.photo} />
      <textarea
        maxLength="320"
        type="text"
        className="flex-1 h-full p-1 min-h-14 border-2 rounded-lg focus:outline-none focus:border-gray-500"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Reply to this comment..."
      />
      <UiButton type="base" onClick={() => handleReply(inputText)}>
        REPLY
      </UiButton>
    </div>
  );
}

export default ReplyCommentForm;
