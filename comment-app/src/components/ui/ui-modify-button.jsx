import clsx from "clsx";
import DeleteIcon from "../icons/delete-icon";
import EditIcon from "../icons/edit-icon";
import ReplyIcon from "../icons/reply-icon";

/**
 * @param {{
 * type: string,
 * onClick: any,
 * disabled: boolean,
 * }} props
 */

function UiButton({ type, onClick, disabled }) {
  const buttonClassname = clsx(
    "flex items-center gap-1",
    {
      reply: "text-blue-700 hover:text-blue-800 ml-auto",
      edit: "text-blue-700 hover:text-blue-800",
      delete: "text-red-700 hover:text-red-800",
    }[type],
    {
      true: "opacity-50",
      false: "opacity-100",
    }[disabled]
  );

  const replyButton = (
    <>
      <ReplyIcon />
      <span className="text-sm font-semibold">Reply</span>
    </>
  );

  const editButton = (
    <>
      <EditIcon />
      <span className="text-sm font-semibold">Edit</span>
    </>
  );

  const deleteButton = (
    <>
      <DeleteIcon />
      <span className="text-sm font-semibold">Delete</span>
    </>
  );

  return (
    <button onClick={onClick} className={buttonClassname} disabled={disabled}>
      {type === "reply" && replyButton}
      {type === "edit" && editButton}
      {type === "delete" && deleteButton}
    </button>
  );
}

export default UiButton;
