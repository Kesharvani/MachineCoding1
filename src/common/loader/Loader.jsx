import loader from "../../Assets/loader.gif";
import "./Loader.css";
export const Loader = () => {
  return (
    <div className="loader_wrapper">
      <img src={loader} alt="loader" />
    </div>
  );
};
