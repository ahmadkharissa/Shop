import React from "react"

//assets
import Developer from '../../assets/developer.JPG'
//css
import './about.css'

function About() {
    return (
        <div className="container" style={{ marginBottom: "1%" }}>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <h2 style={{ textAlign: "center" }}>About me</h2>
            <div className="card" style={{ borderRadius: "1.25rem" }}>
                <img src={Developer} alt="harissa" style={{ width: "100%" }} />
                <h1>Ahmad Harissa</h1>
                <p className="title">Web Developer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>ahmadharissa25@gmail.com</p>
                <div style={{ margin: "5%" }}>
                    <a target="_blank" rel="noreferrer" href={"https://www.facebook.com/ahmadkharissa"}><i className="bi bi-facebook"></i></a>
                    <a target="_blank" rel="noreferrer" href={"https://www.instagram.com/ahmadkharissa/"}><i className="bi bi-instagram"></i></a>
                    <a target="_blank" rel="noreferrer" href={"https://twitter.com/ahmadkharissa"}><i className="bi bi-twitter"></i></a>
                </div>
                <button className="contact">Contact</button>
            </div>
        </div>
    )
}

export default About