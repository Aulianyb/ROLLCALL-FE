import { useNavigate } from "react-router-dom";
import { useState } from "react";
import apiClient from "../client";

// const axios = require("axios").default;

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setloginStatus] = useState("");
  const navigate = useNavigate();

  function onChangeUsername(e: any) {
    setUsername(e.target.value);
  }

  function onChangePassword(e: any) {
    setPassword(e.target.value);
  }

  async function onSubmit(e: any) {
    e.preventDefault();
    let jsonObject = {
      username: username,
      password: password,
      grant_type: "password",
      scope: "",
      // client_id: null,
      // client_secret: null,
    };

    let formData = new URLSearchParams(Object.entries(jsonObject)).toString();
    apiClient
      .post("/token", formData, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      })
      .then((res) => {
        if (res.data.access_token) {
          localStorage.setItem("token", res.data.access_token);
          navigate("/home");
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          setloginStatus("invalid");
        }
      });
  }

  return (
    <>
      {loginStatus == "invalid" && (
        <div className="alert alert-danger alert-dismissible m-3" role="alert">
          <div>Username atau Password yang dimasukkan tidak valid!</div>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
      <div className="container-sm mt-5">
        <h2 className="mb-4 text-center">Hello again!</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-3">
            <input
              placeholder="Username"
              type="text"
              className="form-control"
              aria-describedby="Username"
              onChange={onChangeUsername}
              required
            />
          </div>
          <div className="mb-3">
            <input
              placeholder="Password"
              type="password"
              className="form-control"
              aria-describedby="Password"
              onChange={onChangePassword}
              required
            />
          </div>
          <div className="text-center">{/* add type button submit */}</div>
          <input type="submit" className="btn btn-primary btn-custom"></input>
        </form>
      </div>
    </>
  );
}
