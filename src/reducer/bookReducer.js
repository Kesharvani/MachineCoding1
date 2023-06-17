import { ACTION_TYPE } from "../utils/index";

export const initialValue = {
  books: [],
  searchTerm: ""
};
export const bookReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.SUCCESS:
      return {
        ...state,
        books: action.payload,
        read: action.payload.filter((item) => item?.category === "read"),
        wantToRead: action.payload.filter(
          (item) => item?.category === "wantToRead"
        ),
        currentlyReading: action.payload.filter(
          (item) => item?.category === "currentlyReading"
        )
      };
    case ACTION_TYPE.SEARCH:
      return {
        ...state,
        searchTerm: action.payload
      };
    case ACTION_TYPE.CHANGECATEGORY:
      return {
        ...state,
        books: [
          ...state.books.filter((item) => item.id !== action.payload.id),
          action.payload
        ]
      };
    default:
      console.log("Error in reducer");
  }
};
