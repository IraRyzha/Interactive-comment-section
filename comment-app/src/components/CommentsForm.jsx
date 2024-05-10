import { useContext, useState } from "react";
import { MainContext } from "../context/AppContext";
import { addComment } from "../store/actions";
// import Author from "./comment/Author";
import UiButton from "./ui/ui-button";

function CommentsForm() {
  const { dispatch } = useContext(MainContext);
  const [inputText, setInputText] = useState("");
  const [commentId, setCommentId] = useState(10);

  const comment = {
    id: commentId,
    text: inputText,
    author: {
      name: "MyProfile",
      photo: "https://api.lorem.space/image/face?w=150&h=150&r=1",
    },
    date: "yesterday",
    votes: 0,
    replies: [],
  };

  console.log(comment);

  return (
    <div className="w-full h-full p-2 flex items-start justify-center gap-5 bg-white border-2">
      <div className="w-auto h-full max-w-8 max-h-8 flex items-center justify-center">
        <img
          className="w-full h-full rounded-full"
          src="https://api.lorem.space/image/face?w=150&h=150"
          alt=""
        />
      </div>
      <input
        type="text"
        className="flex-1 h-full border-2 rounded-lg"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <UiButton
        type="base"
        onClick={() => {
          addComment(dispatch, comment);
          setInputText("");
          setCommentId((prev) => prev + 1);
        }}
      >
        SEND
      </UiButton>
    </div>
  );
}

export default CommentsForm;
