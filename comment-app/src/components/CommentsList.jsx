import { useContext } from "react";
import { MainContext } from "../context/AppContext";
import Comment from "./comment/Comment";

function CommentsList() {
  const { state, user } = useContext(MainContext);
  return (
    <div className="w-full h-full max-h-[700px] overflow-scroll flex flex-col items-center gap-2 border-2">
      {state.comments.map((comment) => {
        return (
          <div
            key={comment.id}
            className="w-full h-auto flex flex-col items-end border-2"
          >
            <Comment
              comment={comment}
              isUserOwn={comment.author.name === user.name}
            />
            <div className="w-[92%] h-auto border-2">
              {comment.replies.map((reply) => {
                return (
                  <Comment
                    key={reply.id}
                    comment={reply}
                    isUserOwn={reply.author.name === user.name}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CommentsList;
