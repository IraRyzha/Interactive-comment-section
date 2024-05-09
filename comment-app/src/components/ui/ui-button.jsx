import clsx from "clsx";
import DeleteIcon from "../icons/delete-icon";
import EditIcon from "../icons/edit-icon";
import ReplyIcon from "../icons/reply-icon";

/**
 * @param {{
 * type: string,
 * }} props
 */

function UiButton({ children, className, type, onClick }) {
  const buttonClassname = clsx(
    className,
    "flex items-center gap-1 border-2",
    {
      reply: "text-blue-700 hover:text-blue-800",
      edit: "text-blue-700 hover:text-blue-800",
      delete: "text-red-700 hover:text-red-800",
    }[type]
  );

  const mainButton = (
    <button className="px-5 py-1 rounded-lg bg-blue-700 hover:bg-blue-800 border-2">
      {children}
    </button>
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
    <button onClick={onClick} className={buttonClassname}>
      {type === "base" && mainButton}
      {type === "reply" && replyButton}
      {type === "edit" && editButton}
      {type === "delete" && deleteButton}
    </button>
  );
}

export default UiButton;
