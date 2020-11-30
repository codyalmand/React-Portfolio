import React from "react";
import Project from "../components/Project";
import picA from "../images/login.png";
import picB from "../images/Pixel-Picks.png";
import picC from "../images/Note-Taker.gif";
import picD from "../images/dayplanner.png";
import picE from "../images/readme-generator.gif";
import picF from "../images/Employee-Summary.png";
import Navbar from "../components/Navbar.js";

function Portfolio() {
    return (
        <div class="container">
            <section className="row">
            <Navbar />
                <article className="col-10">
                    <h1>Portfolio</h1>
                    <br></br>
                    <a href="https://github.com/codyalmand?tab=repositories">(CLick Here To View All Github Repositories)</a>
                </article>
            </section>
            <hr class="my-4"></hr>
            <Project img={picA} linkA="https://merx-speedrun.herokuapp.com/" linkB="https://github.com/codyalmand/Merx" 
            title ="MERX" description="Search and compare your gaming speedrun to world record holders."/>
            <Project img={picB} linkA="https://codyalmand.github.io/Pixel-Picks/" linkB="https://github.com/codyalmand/Pixel-Picks" 
            title ="Pixel-Picks" description="Choose what mood you're in and Pixel-Picks will pick a game and movie suggestion for you."/>
            <Project img={picC} linkA="https://note-taker-by-cba.herokuapp.com/" linkB="https://github.com/codyalmand/Note-Taker" 
            title ="Note-Taker" description="Write and save/delete notes"/>
            <Project img={picD} linkA="https://codyalmand.github.io/JS-Day-Planner/" linkB="https://github.com/codyalmand/JS-Day-Planner" 
            title ="Day-Planner" description="A day planner that allows users to enter tasks scheduled from 9am to 5pm changes color depending on the current time."/>
            <Project img={picE} linkA="https://drive.google.com/file/d/1WSQQgIBGHZ1N-KgIk8DR5u7FzDgChFN9/view" linkB="https://github.com/codyalmand/README-File-Generator" 
            title ="README-File-Generator" description="Enter project information when prompted in the terminal and this app will produce a README file."/>
            <Project img={picF} linkA="https://github.com/codyalmand/Employee-Summary" linkB="https://drive.google.com/file/d/1yl6SViNDm3x0_8PephL7rNDPPVuVtFLP/view" 
            title ="Employee-Summary" description="This app will create an HTML file that displays a nicely formatted employee roster based on the information provided by the user."/>
        </div>
    );
}

export default Portfolio;