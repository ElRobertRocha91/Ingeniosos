import React from "react";
import { Link } from "react-router-dom";

function NavBar () {

    return(
        <div>
            <div>
                <Link to="/">
                  <div>Ingeniosos</div>
                </Link>
            </div>
            <div>
                <Link to="/">
                  <div>Inicio</div>
                </Link>
            </div>
            <div>
                <Link to="/about">
                  <div>Nosotros</div>
                </Link>
            </div>
            <div>
                <Link to="/faculty">
                  <div>Cursos</div>
                </Link>
            </div>
            <div>
                <Link to="/location">
                  <div>Sede</div>
                </Link>
            </div>
        </div>
    )
}

export default NavBar;