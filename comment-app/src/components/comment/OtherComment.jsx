import UiButton from "../ui/ui-button";
import Voiting from "./Voiting";
import Author from "./Author";
import CommentDate from "./CommentDate";
import TextMessage from "./TextMessage";
import Comment from "./Comment";
import useOtherComment from "../../hooks/useOtherComment";
import ReplyCommentForm from "../ReplyCommentForm";

const OtherComment = ({ comment }) => {
  const { isReplying, setIsReplying, handleReply, handleVotes } =
    useOtherComment(comment);

  return (
    <>
      <div className="w-full h-auto flex items-start gap-4 p-5 bg-white rounded-lg shadow-lg">
        <Voiting
          votes={comment.votes}
          allowToVote={true}
          handleVotes={handleVotes}
        />
        <div className="w-full h-auto flex flex-col gap-3">
          <div className="w-full h-auto flex items-center gap-5">
            <Author author={comment.author} isUserOwn={false} />
            <CommentDate date={comment.date} />
            <UiButton
              type="reply"
              className="ml-auto"
              onClick={() => setIsReplying((prev) => !prev)}
            />
          </div>
          <TextMessage text={comment.text} />
        </div>
      </div>
      {isReplying && <ReplyCommentForm handleReply={handleReply} />}
      {comment.replies?.map((reply) => {
        return (
          <div key={reply.id} className="w-[92%] h-auto relative p-1">
            <div className="bg-gray-300 rounded-lg shadow-lg w-[2px] h-[105%] absolute -left-[5%] -top[3%] -bottom-[3%]"></div>
            <Comment comment={reply} />
          </div>
        );
      })}
    </>
  );
};

export default OtherComment;
