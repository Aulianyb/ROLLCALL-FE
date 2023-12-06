import { Link } from "react-router-dom";

export default function WelcomePage() {
  return (
    <>
      <div className="text-center">
        <h2>Welcome to</h2>
        <h1 className="fw-bolder">ROLL CALL</h1>
        <Link to="/login">
          <button type="button" className="btn btn-primary m-2">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button type="button" className="btn btn-secondary m-2">
            Register
          </button>
        </Link>
      </div>
    </>
  );
}
