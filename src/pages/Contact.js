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
            <p className="pcontact">codybalmand@gmail.com</p>
                <p className="pcontact">(936)676-3738</p>
                <Link className="profilelinks" to={{ pathname: "https://github.com/codyalmand"}} target="_blank">Link to Github profile</Link>
                <br></br><br></br>
                <Link className="profilelinks" to={{ pathname: "https://www.linkedin.com/in/codyalmand/"}} target="_blank">Link to LinkedIn profile</Link> 
        </main>
    );
}

export default Contact;