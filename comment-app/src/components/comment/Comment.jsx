import { useContext, useState } from "react";
import { MainContext } from "../../context/AppContext";
import { deleteComment, editComment } from "../../store/actions";
import UiButton from "../ui/ui-button";
import Author from "./Author";
import Date from "./Date";
import TextMessage from "./TextMessage";
import Voiting from "./Voiting";

function Comment({ comment, isUserOwn }) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputText, setInputText] = useState(comment.text);
  const { dispatch } = useContext(MainContext);

  return (
    <div className="w-full h-auto flex gap-4 p-4 bg-white border-2">
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
                onClick={() => deleteComment(dispatch, comment.id)}
              />
              <UiButton
                type="edit"
                disabled={isEditing}
                onClick={() => setIsEditing(true)}
              />
            </div>
          ) : (
            <UiButton type="reply" className="ml-auto" />
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
            <UiButton
              type="base"
              className="mt-auto"
              onClick={() => {
                editComment(dispatch, comment.id, inputText);
                setIsEditing(false);
              }}
            >
              Update
            </UiButton>
          </div>
        ) : (
          <TextMessage text={comment.text} />
        )}
      </div>
    </div>
  );
}

export default Comment;
