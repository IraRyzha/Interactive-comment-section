import { useContext } from "react";
import { MainContext } from "../context/AppContext";
import Comment from "./comment/Comment";
import Loader from "./Loader";

function CommentsList() {
  const { state } = useContext(MainContext);
  return (
    <div className="w-full h-full max-h-[700px] overflow-scroll bg-gray-200 bg-opacity-50 p-5 flex flex-col items-center gap-3 shadow-lg rounded-lg">
      {state.comments.length < 1 && <Loader />}
      {state.comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default CommentsList;
