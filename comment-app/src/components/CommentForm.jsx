import useForm from "../hooks/useForm";
import ProfileImage from "./comment/ProfileImage";
import UiButton from "./ui/ui-button";

function CommentForm({ type, handleReply }) {
  const { inputText, setInputText, handleSend, user } = useForm();

  let actionType;
  let actionText;

  if (type === "add") {
    actionType = handleSend;
    console.log(actionType);
    actionText = "SEND";
  } else {
    actionType = handleReply;
    console.log(actionType);
    actionText = "REPLY";
  }

  console.log(actionType);

  return (
    <div className="w-full h-full p-2 flex items-start justify-center gap-5 bg-white border-2">
      <ProfileImage photo={user.photo} />
      <input
        type="text"
        className="flex-1 h-full border-2 rounded-lg"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <UiButton type="base" onClick={actionType}>
        {actionText}
      </UiButton>
    </div>
  );
}

export default CommentForm;
