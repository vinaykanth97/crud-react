import { useContext } from "react";
import { BookStoreContext } from "./BookStoreContext";
import closeIcon from "../images/close.png";
const UpdateBookList = () => {
  let updateForm = useContext(BookStoreContext);
  let [updateFormFields, setUpdateFormFields] = updateForm.updatePopupAction;
  let [getUpdateValues, setUpdateValues] = updateForm.updateList;
  const [bookList, setBookList] = updateForm.bookDetails;
  const UpdateFormChange = (e) => {
    setUpdateValues({
      ...getUpdateValues,
      [e.target.name]: e.target.value,
    });
  };
  const UpdateFormHandler = (e) => {
    e.preventDefault();
    setUpdateValues(getUpdateValues);
    let bookUpdateById = bookList.filter((books, index) => {
      if (books.id === getUpdateValues.id) {
        bookList[index].title = getUpdateValues.title;
        bookList[index].author = getUpdateValues.author;
        bookList[index].publisher = getUpdateValues.publisher;
        bookList[index].genre = getUpdateValues.genre;
        bookList[index].price = getUpdateValues.price;
      }
      return bookList;
    });
    setBookList(bookUpdateById);
    localStorage.setItem("Books", JSON.stringify(bookUpdateById));
  };

  return (
    <>
      <div className={`store-popup ${updateFormFields ? "" : "d-none"}`}>
        <div className="popup-header">
          <h2>Edit Books here</h2>
          <figure onClick={() => setUpdateFormFields(!updateFormFields)}>
            <img src={closeIcon} alt="Close" />
          </figure>
        </div>
        <div className="popup-body">
          <form onSubmit={UpdateFormHandler}>
            <input
              type="text"
              className="form-field"
              placeholder="Title"
              name="title"
              value={updateFormFields ? getUpdateValues.title : ""}
              onChange={UpdateFormChange}
              required
            />
            <input
              type="text"
              className="form-field"
              placeholder="Author"
              name="author"
              value={updateFormFields ? getUpdateValues.author : ""}
              onChange={UpdateFormChange}
              required
            />
            <input
              type="text"
              className="form-field"
              placeholder="Publisher"
              name="publisher"
              value={updateFormFields ? getUpdateValues.publisher : ""}
              onChange={UpdateFormChange}
              required
            />
            <input
              type="text"
              className="form-field"
              placeholder="Genre"
              name="genre"
              value={updateFormFields ? getUpdateValues.genre : ""}
              onChange={UpdateFormChange}
              required
            />
            <input
              type="number"
              className="form-field"
              placeholder="Price"
              name="price"
              value={updateFormFields ? getUpdateValues.price : ""}
              onChange={UpdateFormChange}
              required
            />
            <button type="Submit">Update Books</button>
          </form>
        </div>
      </div>
      <div
        className={`overlay ${updateFormFields ? "" : "d-none"}`}
        onClick={() => setUpdateFormFields(!updateFormFields)}
      ></div>
    </>
  );
};
export default UpdateBookList;
