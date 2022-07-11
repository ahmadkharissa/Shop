import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

//components
import { socket } from "../../App.jsx";

//redux
import { getNotifications } from '../../redux/notification/notificationAction.jsx';

//css
import './home.css'

function Home() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (socket)
        socket.on("getNotifications", () => {
            dispatch(getNotifications());
        });

    const handelclick = () => {
        // socket.emit("getNotifications")
        navigate("/Category")
    }

    return (
        <div className="home">
            <div className="container">
                <div className="home-information">
                    <h2 className="home-title margin-bottom">Ahmad kasem harissa</h2>
                    <h4 className="home-info">Creative Director</h4>
                    <p className="home-desc">
                        Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you.
                    </p>
                    <button className="home-btn" onClick={handelclick}>Let's Begin</button>
                </div>
            </div>
        </div>
    )
}

export default Home