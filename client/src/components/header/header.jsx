import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom'


//assets
import Logo from '../../assets/images/logo-bg.jpg'

//redux


//css
import "./header.css"

function Header() {
    const [isActive, setActive] = useState(false);
    const { user, isAuthenticated } = useSelector((state) => state.users)

    const handelClick = (e) => {
        e.preventDefault();
        setActive(!isActive);
    }

    return (
        <header className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" style={{ width: "3rem", borderRadius: "50%" }} />
            </div>
            <ul className={isActive ? "ul-list ul-list-block" : "ul-list ul-list-none"}>
                <li className="list-item"><NavLink to="/">Home</NavLink></li>
                <li className="list-item"><NavLink to="/Category">Category</NavLink></li>
                <li className="list-item"><NavLink to="/About">About</NavLink></li>
                {!isAuthenticated && (<React.Fragment>
                    <li className="list-item login-w"><NavLink to="/Login">Log In</NavLink></li>
                    <li className="list-item signup-w"><NavLink to="/Signup">Sign Up</NavLink></li>
                </React.Fragment>)}
                {isAuthenticated && <React.Fragment>
                    <li className="list-item cart"><NavLink to="/Cart">Cart<span className='badge'>{user.wishlist.length}</span></NavLink></li>
                    <li className="list-item">
                        <NavLink to="/Profile" className={"profile"}>
                            <img src={process.env.REACT_APP_API + '/users/' + user.avatar} style={{ width: "5vh", borderRadius: "50%", margin: "1vh" }} alt={user.firstName} />
                            {user.firstName + ' ' + user.lastName}
                        </NavLink></li>
                </React.Fragment>}
            </ul>
            <div className='menu' onClick={handelClick}>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
            </div>
        </header>
    )
}

export default Header