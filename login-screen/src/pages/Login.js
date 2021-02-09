import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import Axios from "axios";

const Login = () => {
  const history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    Axios({
      url: "http://localhost:3000/login",
      method: "POST",
      data: {
        email: input.email,
        password: input.password,
      },
    })
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem("access_token", data.access_token)
        history.push("/home");
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops",
          text: err.response.data.msg,
        });
        console.log(err.response.data.msg);
      })
      .finally(() => {
        setInput({email: "", password: ""})
      })
  };

  return (
    <div>
      <div
        className="container"
        style={{
          marginTop: "100px",
          width: "500px",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h1>
        <form onSubmit={(e) => onSubmitLogin(e)}>
          <div className="mb-3 row">
            <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
              Email
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="staticEmail"
                value={input.email}
                name="email"
                onChange={inputChange}
                required
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Password
            </label>
            <div className="col-sm-10">
              <input
                type="password"
                className="form-control"
                id="inputPassword"
                value={input.password}
                name="password"
                onChange={inputChange}
                required
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
