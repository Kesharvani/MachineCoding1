import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  useState
} from "react";

import { initialValue, bookReducer } from "../reducer/bookReducer";
import { ACTION_TYPE } from "../utils/index";
import { fakeFetch } from "../db/fakeFetch";
export const BookContext = createContext();
export const BookProvider = ({ children }) => {
  const [state, dispatch] = useReducer(bookReducer, initialValue);
  const [isLoading, setIsLoaing] = useState(false);
  const getDataFromDataBase = async () => {
    setIsLoaing(true);
    try {
      const {
        data: { books },
        status
      } = await fakeFetch("https://example.com/api/books");
      if (status === 200) {
        dispatch({ type: ACTION_TYPE.SUCCESS, payload: books });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoaing(false);
    }
  };
  useEffect(() => {
    getDataFromDataBase();
  }, []);
  return (
    <BookContext.Provider value={{ state, dispatch, isLoading }}>
      {children}
    </BookContext.Provider>
  );
};
export const useBook = () => useContext(BookContext);
