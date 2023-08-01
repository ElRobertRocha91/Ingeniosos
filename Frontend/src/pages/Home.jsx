import React from "react";
import NavBar from '../components/NavBar/NavBar';
import Publications from "../components/Publications/Publications";

function Home () {

    return (
        <div>
            <div>
                <img src="" alt="Image"/>
                <h2>Centro de Apoyo Escolar</h2>
                <h2>Ingeniosos</h2>
                <button>Inscribirse</button>
                <br/>
                <NavBar/>
                <Publications/>
            </div>
        </div>
    )
}

export default Home;