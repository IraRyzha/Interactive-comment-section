import { useContext } from "react";
import { MainContext } from "../context/AppContext";
import Comment from "./comment/Comment";
import Loader from "./Loader";

function CommentsList() {
  const { state } = useContext(MainContext);
  return (
    <div className="w-full h-full max-h-[700px] overflow-scroll flex flex-col items-center gap-2 border-2">
      {state.comments.length < 1 && <Loader />}
      {state.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default CommentsList;
