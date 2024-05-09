import UiButton from "../ui/ui-button";
import Author from "./Author";
import Date from "./Date";
import TextMessage from "./TextMessage";
import Voiting from "./Voiting";

function Comment({ comment }) {
  return (
    <div className="w-full h-auto flex gap-4 p-4 bg-white border-2">
      <div className="max-w-max max-h-max flex items-start border-2">
        <Voiting votes={comment.votes} />
      </div>
      <div className="w-full h-auto flex flex-col gap-3 border-2">
        <div className="w-full h-auto flex items-center gap-5">
          <Author author={comment.author} />
          <Date date={comment.date} />
          <UiButton type="reply" className="ml-auto" />
        </div>
        <TextMessage text={comment.text} />
      </div>
    </div>
  );
}

export default Comment;
