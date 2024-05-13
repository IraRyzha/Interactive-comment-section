import clsx from "clsx";
import DeleteIcon from "../icons/delete-icon";
import EditIcon from "../icons/edit-icon";
import ReplyIcon from "../icons/reply-icon";

/**
 * @param {{
 * children: any,
 * className: string,
 * type: string,
 * onClick: any,
 * disabled: boolean,
 * }} props
 */

function UiButton({ children, className, type, onClick, disabled }) {
  const buttonClassname = clsx(
    className,
    "flex items-center gap-1",
    {
      reply: "text-blue-700 hover:text-blue-800",
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
    <>
      {type === "base" ? (
        <button
          onClick={onClick}
          className={`px-5 py-2 rounded-lg text-white bg-blue-700 hover:bg-opacity-75 ${className}`}
        >
          {children}
        </button>
      ) : (
        <button
          onClick={onClick}
          className={buttonClassname}
          disabled={disabled}
        >
          {type === "reply" && replyButton}
          {type === "edit" && editButton}
          {type === "delete" && deleteButton}
        </button>
      )}
    </>
  );
}

export default UiButton;
