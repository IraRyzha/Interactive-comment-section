import { useContext, useEffect } from "react";
import CommentsList from "../components/CommentsList";
import AddCommentForm from "../components/AddCommentForm";
import { MainContext } from "../context/AppContext";
import { setComments } from "../store/actions";
import getComments from "../services/getComments";

function CommentsPage() {
  const { dispatch } = useContext(MainContext);
  useEffect(() => {
    const fetchComments = async () => {
      const comments = await getComments();
      setComments(dispatch, comments);
    };
    fetchComments();
  }, []);

  return (
    <div className="w-full h-screen py-8 flex flex-col items-center justify-center gap-5 bg-gray-100 bg-opacity-50 rounded-lg">
      <div className="w-1/2 h-5/6">
        <CommentsList />
      </div>
      <div className="w-1/2 h-1/6 flex flex-col items-center justify-center">
        <AddCommentForm />
      </div>
    </div>
  );
}

export default CommentsPage;
