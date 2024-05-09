import { useContext } from "react";
import CommentsForm from "../components/CommentsForm";
import CommentsList from "../components/CommentsList";
import { MainContext } from "../context/AppContext";

function CommentsPage() {
  const { state, dispatch } = useContext(MainContext);

  return (
    <div>
      <CommentsList />
      <CommentsForm />
    </div>
  );
}

export default CommentsPage;
