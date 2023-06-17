import "./BookTile.css";
import { useBook } from "../../context/BookContext";
import { ACTION_TYPE } from "../../utils";
export const BookTile = ({ books }) => {
  const { dispatch } = useBook();
  const onChangeHandler = (e, item) => {
    const newItem = { ...item, category: e.target.value };
    dispatch({ type: ACTION_TYPE.CHANGECATEGORY, payload: newItem });
  };
  return (
    <div className="book_tile_wrapper">
      {books?.map((item) => {
        return (
          <div className="booktile" key={item.id}>
            <img
              src={item?.image}
              alt="bookImage"
              width="200px"
              height="200px"
            />
            <select
              name="changeState"
              id="changeStateOfBook"
              value={item.category}
              onChange={(e) => onChangeHandler(e, item)}
            >
              <option value="" disabled>
                ..move to
              </option>
              <option value="read" defaultChecked={item.category === "read"}>
                Read
              </option>
              <option
                value="wantToRead"
                defaultChecked={item.category === "wantToRead"}
              >
                Want to Read
              </option>
              <option
                value="currentlyReading"
                defaultChecked={item.category === "currentlyReading"}
              >
                Currently Reading
              </option>
            </select>
            <h4>Title:{item?.title}</h4>
            <p>Author:{item?.author}</p>
          </div>
        );
      })}
    </div>
  );
};
