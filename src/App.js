import "./App.css";
import BookStoreHeader from "./components/BookStoreHeader";
import BookStoreLists from "./components/BookStoreLists";
import AddBookList from "./components/AddBookList";
import { BookStoreProvider } from "./components/BookStoreContext";
import UpdateBookList from "./components/UpdateBookList";
function App() {
  return (
    <div className="wrapper">
      <BookStoreProvider>
        <BookStoreHeader />
        <BookStoreLists />
        <AddBookList />
        <UpdateBookList />
      </BookStoreProvider>
    </div>
  );
}

export default App;
