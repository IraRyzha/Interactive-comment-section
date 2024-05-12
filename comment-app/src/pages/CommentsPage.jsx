import { useContext, useEffect } from "react";
import CommentForm from "../components/CommentForm";
import CommentsList from "../components/CommentsList";
import { MainContext } from "../context/AppContext";
import { fetchComments } from "../store/actions";

function CommentsPage() {
  const { dispatch } = useContext(MainContext);

  useEffect(() => {
    fetchComments(dispatch);
  }, []);

  return (
    <div className="w-full h-screen py-8 flex flex-col items-center justify-center gap-3 bg-slate-100 rounded-lg border-2">
      <div className="w-1/2 h-5/6 border-2">
        <CommentsList />
      </div>
      <div className="w-1/2 h-1/6 border-2">
        <CommentForm type="add" />
      </div>
    </div>
  );
}

export default CommentsPage;
