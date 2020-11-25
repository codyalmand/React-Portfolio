import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Project(props) {
    return(
        <div className="row styling">
          <div className="col-md-5">
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <Link className="btn btn-secondary" id="repolink" to={{ pathname: props.linkA}} target="_blank">View Deployed Site</Link>
            <br></br>
            <Link className="btn btn-secondary" id="repolink" to={{ pathname: props.linkB}} target="_blank">View GitHub Repo</Link>
          </div>
          <div className="col-md-7">
            <Link to={{ pathname: props.linkA}} target="_blank">
              <img className="img-fluid" id="imgprojects" src={props.img} alt="project" />
            </Link>
          </div>
        </div>
    );
}

export default Project;