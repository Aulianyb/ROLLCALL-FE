import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div className="container-sm mt-5">
        <h2 className="mb-4 text-center">Hello again!</h2>
        <form>
          <div className="mb-3">
            <input
              placeholder="Username"
              type="text"
              className="form-control"
              aria-describedby="Username"
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              type="password"
              className="form-control"
              aria-describedby="Password"
            />
          </div>
          <div className="text-center">
            <Link to="/home">
              <button className="btn btn-primary" type="submit">
                Submit form
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
