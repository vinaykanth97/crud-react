import { useContext } from "react";
import addIcon from "../images/add.png";
import { BookStoreContext } from "./BookStoreContext";

const BookStoreHeader = () => {
  const bookActions = useContext(BookStoreContext);
  const [popupAction, setPopupAction] = bookActions.popupActions;
  const SearchValueHandler = (e) => {
    let currentText = e.target.value.toLowerCase();
    bookActions.searchText[1](currentText);
    let filteredBooks = bookActions.bookDetails[0].filter((bookCollection) => {
      return (
        bookCollection.title.indexOf(currentText) !== -1 ||
        bookCollection.author.indexOf(currentText) !== -1 ||
        bookCollection.publisher.indexOf(currentText) !== -1 ||
        bookCollection.genre.indexOf(currentText) !== -1 ||
        bookCollection.price.indexOf(currentText) !== -1
      );
    });
    if (currentText !== "") {
      bookActions.filterSearches[1](filteredBooks);
    } else {
      bookActions.filterSearches[1](bookActions.bookDetails[0]);
    }
  };

  return (
    <div className="store-header">
      <h1>Book Store</h1>
      <form>
        <input
          type="text"
          placeholder="Search Books..."
          className="form-field"
          onChange={SearchValueHandler}
        />
      </form>
      <button onClick={() => setPopupAction(!popupAction)}>
        <span>
          <img src={addIcon} alt="Add" />
        </span>
        Add New Book
      </button>
    </div>
  );
};
export default BookStoreHeader;
