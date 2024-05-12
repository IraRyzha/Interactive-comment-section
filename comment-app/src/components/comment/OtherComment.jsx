import UiButton from "../ui/ui-button";
import Voiting from "./Voiting";
import Author from "./Author";
import Date from "./Date";
import TextMessage from "./TextMessage";
import Comment from "./Comment";
import useOtherComment from "../../hooks/useOtherComment";
import ReplyCommentForm from "../ReplyCommentForm";

const OtherComment = ({ comment }) => {
  const { isReplying, setIsReplying, handleVotes } = useOtherComment(comment);
  return (
    <>
      <div className="w-full h-auto flex items-start gap-4 p-5 bg-white border-2">
        <Voiting votes={comment.votes} handleVotes={handleVotes} />
        <div className="w-full h-auto flex flex-col gap-3 border-2">
          <div className="w-full h-auto flex items-center gap-5">
            <Author author={comment.author} isUserOwn={false} />
            <Date date={comment.date} />
            <UiButton
              type="reply"
              className="ml-auto"
              onClick={() => setIsReplying(true)}
            />
          </div>
          <TextMessage text={comment.text} />
        </div>
      </div>
      {isReplying && (
        <ReplyCommentForm
          toComment={comment.id}
          setIsReplying={setIsReplying}
        />
      )}
      {comment.replies?.map((reply) => {
        return (
          <div key={reply.id} className="w-[92%] h-auto border-2">
            <Comment comment={reply} />
          </div>
        );
      })}
    </>
  );
};

export default OtherComment;
