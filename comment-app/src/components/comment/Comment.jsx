import UiButton from "../ui/ui-button";
import Author from "./Author";
import Date from "./Date";
import TextMessage from "./TextMessage";
import Voiting from "./Voiting";
import DeleteDialog from "./DeleteDialog";
import useComment from "../../hooks/useComment";
// import { useContext } from "react";
// import { MainContext } from "../../context/AppContext";
import CommentForm from "../CommentForm";

function Comment({ comment, isUserOwn }) {
  const {
    inputText,
    setInputText,
    isEditing,
    isReplying,
    setIsReplying,
    isOpen,
    setIsOpen,
    handleDelete,
    handleEdit,
    handleUpdate,
    handleReply,
  } = useComment(comment);

  return (
    <div className="w-full h-auto flex flex-col gap-2 border-2">
      <div className="w-full h-auto flex gap-4 p-5 bg-white border-2">
        <div className="max-w-max max-h-max flex items-start border-2">
          <Voiting votes={comment.votes} />
        </div>
        <div className="w-full h-auto flex flex-col gap-3 border-2">
          <div className="w-full h-auto flex items-center gap-5">
            <Author author={comment.author} isUserOwn={isUserOwn} />
            <Date date={comment.date} />
            {isUserOwn ? (
              <div className="ml-auto flex items-center gap-2">
                <UiButton
                  type="delete"
                  disabled={isEditing}
                  onClick={() => setIsOpen(true)}
                />
                <UiButton
                  type="edit"
                  disabled={isEditing}
                  onClick={handleEdit}
                />
              </div>
            ) : (
              <UiButton
                type="reply"
                className="ml-auto"
                onClick={() => setIsReplying(true)}
              />
            )}
          </div>
          {isEditing ? (
            <div className="w-full h-auto flex flex-col items-end gap-1 border-2">
              <input
                type="text"
                className="flex-1 w-full h-auto min-h-14 border-2 rounded-lg"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <UiButton type="base" className="mt-auto" onClick={handleUpdate}>
                Update
              </UiButton>
            </div>
          ) : (
            <TextMessage text={comment.text} />
          )}
        </div>
      </div>
      {isReplying ? (
        <CommentForm type="reply" handleReply={handleReply} />
      ) : null}
      <DeleteDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default Comment;
