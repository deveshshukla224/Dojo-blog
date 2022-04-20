import {Link} from "react-router-dom";
import React from "react";
const NotFound = ()=>{
    return(
        <div className="not-found">
            <h2> Sorry </h2>
            <p> That page is not found </p>
            <Link id="not-found-link" to="/">Return to Home Page </Link>
        </div>
    )
}

export default NotFound;
