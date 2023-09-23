import "./Welcome.css";
import { Link } from "react-router-dom";
function Welcome() {
  return (
    <div className="welcome-wrapper">
      <h1>Welcome to your learning platform</h1>
      <Link to="/GamePage">
        <button
          className="primary-button"
          style={{
            borderRadius: 0,
            padding: "20px 150px",
            fontSize: "2.0em",
            fontWeight: 600,
            border: "6px solid black",
            boxShadow: "4px 4px 0px 0px rgba(0,0,0,1)",
          }}
        >
          Start
        </button>
      </Link>
    </div>
  );
}

export default Welcome;
