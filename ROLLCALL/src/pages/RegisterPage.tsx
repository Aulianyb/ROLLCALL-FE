import { useState } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      <div className="container-welcome">
        <h2 className="mb-4 text-center">Start your journey!</h2>
        <form>
          <input
            placeholder="Username"
            type="text"
            className="form-control mb-3"
            aria-describedby="Username"
          />
          <input
            placeholder="Password"
            type="password"
            className="form-control mb-3"
            aria-describedby="Password"
          />
          <select className="form-select mb-3" aria-label="Form City">
            <option selected>City</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <p className="text-center">
            We want to know you better <br /> Pick your favorite games
          </p>
          <div className="btn-group mb-3" role="group" aria-label="Basic checkbox toggle button group">
          <input
            type="checkbox"
            className="btn-check"
            id="btn-check-2"
            checked={isChecked}
            autoComplete="off"
            onChange={handleCheckboxChange}
          />
          <label className="btn btn-primary" htmlFor="btn-check-2">
            Checked
          </label>
          <input
            type="checkbox"
            className="btn-check"
            id="btn-check-2"
            checked={isChecked}
            autoComplete="off"
            onChange={handleCheckboxChange}
          />
          <label className="btn btn-primary" htmlFor="btn-check-2">
            Checked
          </label>
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
