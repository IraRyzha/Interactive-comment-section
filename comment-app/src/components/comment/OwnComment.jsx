import UiButton from "../ui/ui-button";
import Voiting from "./Voiting";
import Author from "./Author";
import CommentDate from "./CommentDate";
import TextMessage from "./TextMessage";
import DeleteDialog from "./DeleteDialog";
import Comment from "./Comment";
import useOwnComment from "../../hooks/useOwnComment";

const OwnComment = ({ comment }) => {
  const {
    inputText,
    setInputText,
    isEditing,
    setIsEditing,
    isOpen,
    setIsOpen,
    handleDelete,
    handleUpdate,
  } = useOwnComment(comment);

  return (
    <>
      <div className="w-full h-auto relative flex items-start gap-4 p-5 bg-white rounded-lg shadow-lg">
        <Voiting
          comment={comment}
          handleVotes={() => alert("You can not vote to your own comment!")}
        />
        <div className="w-full h-auto flex flex-col gap-3">
          <div className="w-full h-auto flex items-center gap-5">
            <Author author={comment.author} isUserOwn={true} />
            <CommentDate date={comment.date} />
            <div className="ml-auto flex items-center gap-2">
              <UiButton
                type="delete"
                disabled={isEditing}
                onClick={() => setIsOpen(true)}
              />
              <UiButton
                type="edit"
                disabled={isEditing}
                onClick={() => setIsEditing(true)}
              />
            </div>
          </div>
          {isEditing ? (
            <div className="w-full h-auto min-h-32 flex flex-col items-end gap-1">
              <textarea
                type="text"
                className="flex-1 w-full h-auto min-h-14 text-sm border-2 focus:outline-none focus:border-gray-500 p-3 rounded-lg"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <UiButton type="base" className="mt-auto" onClick={handleUpdate}>
                Update
              </UiButton>
            </div>
          ) : (
            <TextMessage
              text={comment.text}
              toName={comment.replyToName ? comment.replyToName : ""}
            />
          )}
        </div>
        <DeleteDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleDelete={handleDelete}
        />
      </div>
      {comment.replies?.map((reply) => {
        return (
          <div key={reply.id} className="w-[92%] h-auto relative p-1">
            <div className="bg-gray-300 rounded-lg shadow-lg w-[2px] h-[105%] absolute -left-[5%] -top-[3%] -bottom-[3%]"></div>
            <Comment comment={reply} />
          </div>
        );
      })}
    </>
  );
};

export default OwnComment;
