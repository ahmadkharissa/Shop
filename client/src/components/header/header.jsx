import React, { useState } from 'react';
import { useSelector } from 'react-redux/es/exports';
import { NavLink } from 'react-router-dom'


//assets
import Logo from '../../assets/logo-bg.jpg'

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
                <li className="list-item">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/Category">Category</NavLink>
                </li>
                <li className="list-item">
                    <NavLink to="/About">About</NavLink>
                </li>
                {!isAuthenticated && (<React.Fragment>
                    <li className="list-item">
                        <NavLink to="/Login">
                            <i className="bi bi-box-arrow-in-right"></i>
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink to="/Signup">
                            <i className="bi bi-person-plus"></i>
                        </NavLink>
                    </li>
                </React.Fragment>)}
                {isAuthenticated && <React.Fragment>
                    <li className="list-item cart-h">
                        <NavLink to="/Cart">
                            Cart<span className='badge'>{user.wishlist.length}</span>
                        </NavLink>
                    </li>
                    <li className="list-item">
                        <NavLink to="/Profile" className={"profile"}>
                            <img src={process.env.REACT_APP_API + '/users/' + user.avatar} style={{ width: "5vh", borderRadius: "50%", margin: "1vh" }} alt={user.firstName} />
                            {user.firstName + ' ' + user.lastName}
                        </NavLink>
                    </li>
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