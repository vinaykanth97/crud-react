import editIcon from "../images/edit.png";
import trashIcon from "../images/trash.png";
import { useContext } from "react";
import { BookStoreContext } from "./BookStoreContext";
const BookStoreLists = () => {
  const allBookLists = useContext(BookStoreContext);
  const [bookList, setBookList] = allBookLists.bookDetails;
  let [updateFormStatus, setUpdateFormStatus] = allBookLists.updatePopupAction;
  let [filteredResults] = allBookLists.filterSearches;
  const RemoveBookHandler = (index) => {
    let currentId = bookList[index].id;
    let removeBook = bookList.filter((list) => {
      return list.id !== currentId;
    });
    setBookList(removeBook);
    localStorage.setItem("Books", JSON.stringify(removeBook));
  };

  const UpdateBookSpecHandler = (index) => {
    setUpdateFormStatus(!updateFormStatus);
    let currentId = bookList[index].id;
    let updateBook = bookList.filter((list) => {
      return list.id === currentId;
    });
    allBookLists.updateList[1](updateBook[0]);
  };
  return (
    <table className="store-lists">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Publisher</th>
          <th>Genre</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {allBookLists.searchText[0].length > 1
          ? filteredResults.map((filteredList, index) => {
              let { title, author, publisher, genre, price } = filteredList;
              return (
                <tr key={index}>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>{publisher}</td>
                  <td>{genre}</td>
                  <td>{price}</td>
                  <td>
                    <div className="flex actions">
                      <span onClick={() => UpdateBookSpecHandler(index)}>
                        <img src={editIcon} alt="edit" />
                      </span>
                      <span onClick={() => RemoveBookHandler(index)}>
                        <img src={trashIcon} alt="Trash" />
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })
          : bookList.map((lists, index) => {
              let { title, author, publisher, genre, price } = lists;
              return (
                <tr key={index}>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>{publisher}</td>
                  <td>{genre}</td>
                  <td>{price}</td>
                  <td>
                    <div className="flex actions">
                      <span onClick={() => UpdateBookSpecHandler(index)}>
                        <img src={editIcon} alt="edit" />
                      </span>
                      <span onClick={() => RemoveBookHandler(index)}>
                        <img src={trashIcon} alt="Trash" />
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
      </tbody>
      <tfoot>
        {allBookLists.searchText[0].length > 1 ? (
          <tr>
            <td>Showing {filteredResults.length} entries</td>
          </tr>
        ) : (
          <tr>
            <td>Showing {bookList.length} entries</td>
          </tr>
        )}
      </tfoot>
    </table>
  );
};
export default BookStoreLists;
