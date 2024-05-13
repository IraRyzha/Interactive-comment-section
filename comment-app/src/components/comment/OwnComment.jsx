import UiButton from "../ui/ui-button";
import Voiting from "./Voiting";
import Author from "./Author";
import Date from "./Date";
import TextMessage from "./TextMessage";
import DeleteDialog from "./DeleteDialog";
import Comment from "./Comment";
import useOwnComment from "../../hooks/useOwnComment";
import { useState } from "react";

const OwnComment = ({ comment }) => {
  const {
    isEditing,
    setIsEditing,
    isOpen,
    setIsOpen,
    handleDelete,
    handleUpdate,
  } = useOwnComment();
  const [inputText, setInputText] = useState(() => comment.text);

  return (
    <>
      <div className="w-full h-auto flex items-start gap-4 p-5 bg-white border-2">
        <Voiting votes={comment.votes} allowToVote={false} />
        <div className="w-full h-auto flex flex-col gap-3 border-2">
          <div className="w-full h-auto flex items-center gap-5">
            <Author author={comment.author} isUserOwn={true} />
            <Date date={comment.date} />
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
            <div className="w-full h-auto flex flex-col items-end gap-1 border-2">
              <input
                type="text"
                className="flex-1 w-full h-auto min-h-14 border-2 rounded-lg"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <UiButton
                type="base"
                className="mt-auto"
                onClick={() => handleUpdate(comment.id, inputText)}
              >
                Update
              </UiButton>
            </div>
          ) : (
            <TextMessage text={comment.text} />
          )}
        </div>
        <DeleteDialog
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          handleDelete={() => handleDelete(comment.id)}
        />
      </div>
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

export default OwnComment;
