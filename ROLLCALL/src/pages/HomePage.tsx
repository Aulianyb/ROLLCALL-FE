import { useEffect, useState } from "react";
import apiClient from "../client";
import Spinner from "../components/spinner";

export default function HomePage() {
  const [user, setUser] = useState(null);
  const [cityData, setCityData] = useState([]);
  const [boardgameData, setBoardgameData] = useState([]);
  const [matches, setMatches] = useState([]);

  function componentDidMount() {
    apiClient
      .get("/city", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCityData(res.data);
        console.log(cityData);
      });

    apiClient
      .get("/boardgame", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setBoardgameData(res.data);
        console.log(res.data);
      });

    apiClient
      .get("/users/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      });

    apiClient
      .get("/matchmaking", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setMatches(res.data);
        console.log(res.data);
      });
  }

  useEffect(() => {
    componentDidMount();
  }, []);

  function boardgameList(boardgames: number[]) {
    return boardgames.map((currBoardgame) => {
      return (
        <span className="badge text-bg-primary me-1">
          {boardgameData[currBoardgame].name}
        </span>
      );
    });
  }

  function renderCurrentUser() {
    return (
      <>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{user.username}</h5>
            <span className="badge text-bg-secondary">
              {cityData[user.city].name}
            </span>
            <br />
            {boardgameList(user.boardgame)}
          </div>
        </div>
      </>
    );
  }

  function matchesList(matcheslist: any[]) {
    return matcheslist.map((currMatch) => {
      return (
        <div className="card my-2">
          <div className="row align-items-center">
            <div className="col">
              <div className="card-body">
                <h5 className="card-title">{currMatch[0].username}</h5>
                <span className="badge text-bg-secondary">
                  {cityData[currMatch[0].city].name}
                </span>
                <br />
                {boardgameList(currMatch[0].boardgame)}
              </div>
            </div>
            <div className="col text-end me-3">
              <button className="btn btn-primary btn-sm">Add Friend</button>
            </div>
          </div>
        </div>
      );
    });
  }

  function renderLoading() {
    if (user == null || cityData.length == 0 || boardgameData.length == 0) {
      return <Spinner />;
    } else {
      if (matches.length == 0) {
        return (
          <>
            <h4 className="my-3 text-center">This is you!</h4>
            {renderCurrentUser()}
            <h4 className="my-3 text-center">You have no matching user...</h4>
          </>
        );
      }
      return (
        <>
          <h4 className="my-3 text-center">This is you!</h4>
          {renderCurrentUser()}
          <h4 className="my-3 text-center">
            and here's other users similar to you
          </h4>
          {matchesList(matches)}
        </>
      );
    }
  }

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
              <a className="nav-link active" aria-current="page" href="/">
                Logout
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-3">{renderLoading()}</div>
    </>
  );
}
