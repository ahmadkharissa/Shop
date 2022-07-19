import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

//redux
import { forgetPassword, login } from "../../../redux/user/userActions";

//utils
import Default from "../../../assets/default.png"

//css
import "./login.css"

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { responseLogin, errorLogin, isAuthenticated } = useSelector((state) => state.users);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handelSubmit = (e) => {
    e.preventDefault()
    const data = { email, password };
    dispatch(login(data))
  }

  const handelChangeEmail = (e) => {
    e.preventDefault()
    setEmail(e.target.value)
  }

  const handelChangePassword = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  const handelClickForgetPassword = (e) => {
    e.preventDefault()
    const enter = window.prompt("Enter Email")
    dispatch(forgetPassword(enter))
  }

  useEffect(() => {
    if (isAuthenticated)
      navigate('/');
  }, [isAuthenticated]);

  return (
    <div className="container" style={{ marginBottom: "5%" }}>
      <form onSubmit={handelSubmit}>
        <div className="imgcontainer">
          <img src={Default} alt="Avatar" className="avatar" />
        </div>
        <label htmlFor="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required onChange={handelChangeEmail} />
        <label htmlFor="password"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="password" required onChange={handelChangePassword} />
        <label htmlFor="remember" style={{ marginRight: "5%" }}><b>Remember me</b></label>
        <input type="checkbox" name="remember" />
        <div style={{ textAlign: "center" }}>
          <p className="error">
            {errorLogin}
            <span className="response">
              {responseLogin}
            </span>
          </p>
          <button className="btn btn-primary login" type="submit">Log In</button>
        </div>
      </form>
      <div style={{ textAlign: "center" }}>
        <a rel="noreferrer" onClick={handelClickForgetPassword} style={{cursor: 'pointer'}}>Forgot password? <i className="bi bi-unlock"></i></a>
      </div>
    </div>
  );
}

export default Login;
