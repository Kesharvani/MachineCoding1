import { useNavigate } from "react-router-dom";

import "./Home.css";
import { useBook } from "../../context/BookContext";
import { BookTile } from "../../common/bookTile/BookTile";
import { Loader } from "../../common/loader/Loader";
export const Home = () => {
  const navigate = useNavigate();
  const { isLoading, state } = useBook();

  const currentlyReading = state.books.filter(
    (item) => item.category === "currentlyReading"
  );
  const wantToRead = state.books.filter(
    (item) => item.category === "wantToRead"
  );
  const read = state.books.filter((item) => item.category === "read");
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="home_page_wrapper">
          <button onClick={() => navigate("/search")}>Search</button>
          <div>
            <div>
              <h2>Currently Reading({currentlyReading.length})</h2>
              {currentlyReading.length === 0 ? (
                <div>Currently Reading has no books</div>
              ) : (
                <BookTile books={currentlyReading} />
              )}
            </div>
            <div>
              <h2>Want to Read({wantToRead.length})</h2>
              {wantToRead.length === 0 ? (
                <div>Sorry!! You don't have wishlist books</div>
              ) : (
                <BookTile books={wantToRead} />
              )}
            </div>
            <div>
              <h2>Read({read.length})</h2>
              {read.length === 0 ? (
                <div>You haven't read any book</div>
              ) : (
                <BookTile books={read} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
