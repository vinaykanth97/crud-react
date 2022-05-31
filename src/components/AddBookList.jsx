import { useContext, useEffect, useRef, useState } from "react";
import { BookStoreContext } from "./BookStoreContext";
import closeIcon from "../images/close.png";
import { v4 as uuidv4 } from "uuid";
const AddBookList = () => {
  const bookListFields = useContext(BookStoreContext);
  let [popupAction, setPopupAction] = bookListFields.popupActions;
  let [bookFields, setBookFields] = bookListFields.bookDetails;
  const [bookFieldUpdate, setBookFieldUpdate] = useState();
  const formRef = useRef(null);
  const BookDetailHandler = (e) => {
    let bookListNames = e.target.name;
    setBookFieldUpdate({
      ...bookFieldUpdate,
      [bookListNames]: e.target.value,
    });
  };

  const AddBookHandler = (e) => {
    e.preventDefault();
    let { title, author, publisher, genre, price } = bookFieldUpdate;
    setBookFields([
      ...bookFields,
      {
        id: uuidv4(),
        title,
        author,
        publisher,
        genre,
        price,
      },
    ]);
    // Add books to localStorage
    localStorage.setItem(
      "Books",
      JSON.stringify([
        ...bookFields,
        {
          id: uuidv4(),
          title,
          author,
          publisher,
          genre,
          price,
        },
      ])
    );

    // Reset Form
    formRef.current.reset();
  };

  // Get Books
  useEffect(() => {
    let localBooks = JSON.parse(localStorage.getItem("Books"));
    if (localStorage.getItem("Books")) {
      setBookFields([...localBooks]);
    }
  }, []);

  return (
    <>
      <div className={`store-popup ${popupAction ? "" : "d-none"}`}>
        <div className="popup-header">
          <h2>Add Books Here</h2>
          <figure onClick={() => setPopupAction(!popupAction)}>
            <img src={closeIcon} alt="Close" />
          </figure>
        </div>
        <div className="popup-body">
          <form onSubmit={AddBookHandler} ref={formRef}>
            <input
              type="text"
              className="form-field"
              placeholder="Title"
              name="title"
              onChange={BookDetailHandler}
              value={bookFields.title}
              required
            />
            <input
              type="text"
              className="form-field"
              placeholder="Author"
              name="author"
              onChange={BookDetailHandler}
              value={bookFields.author}
              required
            />
            <input
              type="text"
              className="form-field"
              placeholder="Publisher"
              name="publisher"
              onChange={BookDetailHandler}
              value={bookFields.publisher}
              required
            />
            <input
              type="text"
              className="form-field"
              placeholder="Genre"
              name="genre"
              onChange={BookDetailHandler}
              value={bookFields.genre}
              required
            />
            <input
              type="number"
              className="form-field"
              placeholder="Price"
              name="price"
              onChange={BookDetailHandler}
              value={bookFields.price}
              required
            />
            <button type="Submit">Add Books</button>
          </form>
        </div>
      </div>
      <div
        className={`overlay ${popupAction ? "" : "d-none"}`}
        onClick={() => setPopupAction(!popupAction)}
      ></div>
    </>
  );
};
export default AddBookList;
