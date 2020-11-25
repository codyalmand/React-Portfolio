import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../images/me.jpg";
import Navbar from "../components/Navbar.js";

function About() {
    return ( 
        <main className="container">
        <section className="row">
            <Navbar />
            <article className="col-10">
            <img className="img-fluid" src={profilePic} alt="Cody Almand" />
                <p>
                I am 27 years old, and currently a Software Engineer student for The University of Texas at Austin. 
                I am a hard-working, dedicated, detailed programmer, looking for new opportunities to use my skills and expand my knowledge as a Software Engineer.
                I am very passionate about being a great software developer, and I am always working hard to expand my knowledge in the field. <p>
                In my coursework I have had the opportunity to contribute and create many projects spanning numerous programming languages/tools.  
                I have studied and completed activities and projects, using tools such as HTML, CSS, Javascript, JQuery, AJAX, API's, Node.js, React, MongoDB and MySQL databases. 
                These contributions have improved my performance, knowledge, and ability to get the job done.</p>
                <p>Contact me via email, phone number, or visit my GitHub profile and LinkedIn profile listed in the Contact section. 
                <p>I look forward to meeting with you and learning how I might be a part of your organization.</p>
                </p>
                </p>
                <br></br><br></br>
                <Link className="resume" to={{ pathname: "https://docs.google.com/document/d/1DoIF89ho1ie2ILy03x0PFxzTV70s-rC6qIJIghmILck/edit?usp=sharing"}} target="_blank">View Resume</Link>
                {/* <hr />
                <p>codybalmand@gmail.com</p>
                <p>(936)676-3738</p>
                <Link className="profilelinks" to={{ pathname: "https://github.com/codyalmand"}} target="_blank">Link to Github profile</Link>
                <br></br><br></br>
                <Link className="profilelinks" to={{ pathname: "https://www.linkedin.com/in/codyalmand/"}} target="_blank">Link to LinkedIn profile</Link> 
                <br></br> */}
            </article>
        </section>
        </main>
    )
}

export default About;