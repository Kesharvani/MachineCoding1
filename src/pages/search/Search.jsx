import "./Search.css";
import { useNavigate } from "react-router-dom";

import { useBook } from "../../context/BookContext";
import { ACTION_TYPE } from "../../utils/index";
import { BookTile } from "../../common/bookTile/BookTile";
import { Loader } from "../../common/loader/Loader";
import arrow from "../../Assets/arrow-back.svg";
export const Search = () => {
  const navigate = useNavigate();
  const { dispatch, state, isLoading } = useBook();

  // it will return the array which has search term
  const searchFilteredArray = state.books.filter((item) =>
    item?.title.includes(state.searchTerm)
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="search_page_wrapper">
          <div className="search_button_wrapper">
            <button onClick={() => navigate("/")}>
              <img src={arrow} alt="backButton" />
            </button>
            <input
              type="text"
              placeholder="Search by book name"
              onChange={(e) =>
                dispatch({ type: ACTION_TYPE.SEARCH, payload: e.target.value })
              }
            />
          </div>
          <BookTile books={searchFilteredArray} />
        </div>
      )}
    </>
  );
};
