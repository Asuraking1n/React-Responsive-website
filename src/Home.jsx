import React from "react";
import './App.css';
// import web from "../src/images/web.png";
// import { NavLink } from "react-router-dom";
import Common from "./Common";
function Home() {
    return (
        <>
        <Common name="Welcome To Home Page" btn="Get Started" visit="/service" />
        </>
    );
}

export default Home;
