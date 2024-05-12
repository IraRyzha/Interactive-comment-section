import OwnComment from "./OwnComment";
import OtherComment from "./OtherComment";
import { useContext } from "react";
import { MainContext } from "../../context/AppContext";

function Comment({ comment }) {
  const { user } = useContext(MainContext);
  const isUserOwn = comment.author.name === user.name;
  return (
    <div className="w-full h-auto flex flex-col items-end gap-2 border-2">
      {isUserOwn ? (
        <OwnComment comment={comment} />
      ) : (
        <OtherComment comment={comment} />
      )}
    </div>
  );
}

export default Comment;
