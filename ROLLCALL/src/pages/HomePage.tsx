export default function HomePage() {
  return (
    <>
      <nav className="navbar">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">ROLL CALL</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">
                Profile
              </a>
              <a className="nav-link active" aria-current="page" href="#">
                Create Session
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mt-3">
        <h4 className="my-3 text-center">This is you!</h4>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Hi, User!</h5>
            <span className="badge text-bg-secondary">Bandung</span>
            <br />
            <span className="badge text-bg-primary me-1">Board Game 1</span>
            <span className="badge text-bg-primary">Board Game 1</span>
          </div>
        </div>
        <h4 className="my-3 text-center">
          and here's other users similar to you
        </h4>
        <div className="card my-2">
          <div className="row align-items-center">
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">Hi, User!</h5>
                <span className="badge text-bg-secondary">Bandung</span>
                <br />
                <span className="badge text-bg-primary me-1">Board Game 1</span>
                <span className="badge text-bg-primary">Board Game 1</span>
              </div>
            </div>
            <div className="col text-end me-3">
              <button className="btn btn-primary btn-sm">Add Friend</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
