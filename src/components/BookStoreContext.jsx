import { createContext, useState } from "react";

export const BookStoreContext = createContext();

export const BookStoreProvider = ({ children }) => {
  const [popupActive, setPopupActive] = useState(false);
  const [bookState, setBookState] = useState([]);
  const [updatePopup, setUpdatePopup] = useState(false);
  const [editList, setEditList] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchBook, setSearchBook] = useState("");
  const valueSetter = {
    popupActions: [popupActive, setPopupActive],
    bookDetails: [bookState, setBookState],
    updatePopupAction: [updatePopup, setUpdatePopup],
    updateList: [editList, setEditList],
    filterSearches: [filteredResults, setFilteredResults],
    searchText: [searchBook, setSearchBook],
  };
  return (
    <BookStoreContext.Provider value={valueSetter}>
      {children}
    </BookStoreContext.Provider>
  );
};
