import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import apiClient from "../client";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState(-1);
  const [boardgame, setBoardgame] = useState<number[]>([]);
  const [boardgameData, setBoardgameData] = useState([]);
  const [cityData, setCityData] = useState([]);
  const navigate = useNavigate();
  
  function getRandomInt(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); 
   }

  function onChangeUsername(e) {
    setUsername(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onChangeCity(e) {
    setCity(e.target.value);
  }

  function componentDidMount() {
    apiClient
      .get("/boardgame", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setBoardgameData(res.data);
        console.log(boardgameData);
      });

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
  }

  function onSubmit() {
    // e.preventdefault()
    let user = {
      id : getRandomInt(1, 1000),
      username: username,
      password: password,
      city: city,
      boardgame: boardgame,
      role : "user"
    };

    let login = {
      username: username,
      password: password,
      grant_type: "password",
      scope: "",
      client_id: null,
      client_secret: null,
    }

    let formData = new URLSearchParams(Object.entries(login)).toString();

    apiClient.post("/user", user)
    .then((res)=>{
      console.log(res)
      apiClient.post("/token", formData)
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem("token", res.data.access_token);
          navigate("/home");
        }
      }).catch((error) => {
        if (error.response && error.response.status === 401) {
          // setlStatus("invalid");
        }
      });
      }
    )

    console.log(user);
  }

  useEffect(() => {
    componentDidMount();
  }, []);

  function listBoardGames(boardgames: any[]) {
    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const boardgame = event.target.value;
   
      if (event.target.checked) {
        setBoardgame(prevGames => [...prevGames, boardgame]);
      } else {
        setBoardgame(prevGames => prevGames.filter(game => game !== boardgame));
      }
    };
    return boardgames.map((currBoardgame) => {
      return (
        <>
          <input
            type="checkbox"
            className="btn-check"
            id={`btncheck${currBoardgame.id}`}
            onChange={handleCheckboxChange}
            value={currBoardgame.id}
            autocomplete="off"
          />
          <label
            className="btn btn-dark m-1"
            for={`btncheck${currBoardgame.id}`}
          >
            {currBoardgame.name}
          </label>
        </>
      );
    });
  }

  function listCity(cities: any[]) {
    return cities.map((currCity) => {
      return (
        <option key={currCity.id} value={currCity.id}>
          {currCity.name}
        </option>
      );
    });
  }

  return (
    <>
      <div className="container-sm mt-5">
        <h2 className="mb-4 text-center">Start your journey!</h2>
        <form onSubmit={onSubmit}>
          <input
            placeholder="Username"
            type="text"
            className="form-control mb-3"
            aria-describedby="Username"
            onChange={onChangeUsername}
          />
          <input
            placeholder="Password"
            type="password"
            className="form-control mb-3"
            aria-describedby="Password"
            onChange={onChangePassword}
          />
          <select
            className="form-select mb-3"
            aria-label="Form City"
            onChange={onChangeCity}
            value={city}
          >
            <option selected>City</option>
            {listCity(cityData)}
          </select>
          <p className="text-center">
            We want to know you better <br /> Pick your favorite games
          </p>
          <div
            className="btn-group-sm"
            role="group"
            aria-label="Basic checkbox toggle button group"
          >
            {listBoardGames(boardgameData)}
          </div>
          <div className="text-center"></div>
        </form>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => onSubmit()}
        >
          Submit form
        </button>
      </div>
    </>
  );
}
