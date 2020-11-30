import React from "react";
import Navbar from "../components/Navbar.js";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <main className="container">
            <section className="row">
            <Navbar />
                <article className="col-10">
                    <h1>Contact</h1>
                </article>
            </section>
                <Link className="resume" to={{ pathname: "https://docs.google.com/document/d/1DoIF89ho1ie2ILy03x0PFxzTV70s-rC6qIJIghmILck/edit?usp=sharing"}} target="_blank">View Resume</Link>
                <br></br><br></br>
                <Link className="profilelinks" to={{ pathname: "https://github.com/codyalmand"}} target="_blank">Link to Github profile</Link>
                <br></br><br></br>
                <Link className="profilelinks" to={{ pathname: "https://www.linkedin.com/in/codyalmand/"}} target="_blank">Link to LinkedIn profile</Link> 
                <br></br><br></br>
                <p className="pcontact">codybalmand@gmail.com</p>
                <p className="pcontact">(936)676-3738</p>
        </main>
    );
}

export default Contact;