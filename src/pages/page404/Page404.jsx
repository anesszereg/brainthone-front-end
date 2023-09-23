import "./Page404.css";
import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <>
      <div className="warning">!</div>
      <div className="page404-container">
        <h1>Oops, something went wrong!</h1>
        <h3>
          There was an error with the internal server. Please contact your site
          adminte
        </h3>
        <Link to="/">
          <button className="primary-button button-404">Go back Home</button>
        </Link>
      </div>
    </>
  );
};

export default Page404;
