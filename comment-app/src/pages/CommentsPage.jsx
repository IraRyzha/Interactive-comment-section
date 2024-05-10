import { useContext } from "react";
import CommentsForm from "../components/CommentsForm";
import CommentsList from "../components/CommentsList";
import { MainContext } from "../context/AppContext";

function CommentsPage() {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div className="w-full h-screen py-8 flex flex-col items-center justify-center gap-3 bg-slate-100 rounded-lg border-2">
      <div className="w-1/2 h-5/6 border-2">
        <CommentsList />
      </div>
      <div className="w-1/2 h-1/6 border-2">
        <CommentsForm />
      </div>
    </div>
  );
}

export default CommentsPage;
