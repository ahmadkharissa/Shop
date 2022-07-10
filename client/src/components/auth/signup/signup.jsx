import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//redux
import { signup } from "../../../redux/user/userActions";

//utils
import Default from "../../../assets/images/default.png"

//css
import './signup.css'

function Signup() {
    const dispatch = useDispatch();
    const { errorSignup, responseSignup } = useSelector((state) => state.users)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handelSubmit = (e) => {
        e.preventDefault()
        const data = { firstName, lastName, email, password };
        dispatch(signup(data))
    }

    const handelChangeFName = (e) => {
        e.preventDefault()
        setFirstName(e.target.value)
    }

    const handelChangeLName = (e) => {
        e.preventDefault()
        setLastName(e.target.value)
    }

    const handelChangeEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handelChangePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    return (
        <div className="container" style={{marginBottom: "5%"}}>
            <form onSubmit={handelSubmit}>
                <div className="imgcontainer">
                    <img src={Default} alt="Avatar" className="avatar" />
                </div>
                <label htmlFor="firstname"><b>First Name</b></label>
                <input type="text" placeholder="Enter First Name" name="firstname" required onChange={handelChangeFName} />
                <label htmlFor="lastname"><b>Last Name</b></label>
                <input type="text" placeholder="Enter Last Name" name="lastname" required onChange={handelChangeLName} />
                <label htmlFor="email"><b>Email</b></label>
                <input type="email" placeholder="Enter Email" name="email" required onChange={handelChangeEmail} />
                <label htmlFor="password"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="password" required onChange={handelChangePassword} />
                <div style={{textAlign: "center"}}>
                    <p className="error">
                        {errorSignup}
                        <span className="response">
                            {responseSignup}
                        </span>
                    </p>
                    <button className="btn btn-primary signup" type="submit">Signup</button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
