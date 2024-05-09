import AppContext from "./context/AppContext";
import CommentsPage from "./pages/CommentsPage";

function App() {
  return (
    <AppContext>
      <CommentsPage />
    </AppContext>
  );
}

export default App;
