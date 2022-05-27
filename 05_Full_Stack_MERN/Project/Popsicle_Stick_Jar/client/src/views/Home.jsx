import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import HomeTable1 from "../components/HomeTable1"
import "../css/Home.css";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Header />
            <div className="container p-1">
                {/* <h1>Hello</h1> */}

                <hr className="mx-5" />
                <Navbar />

                <div id="main-content" className="row justify-content-between">
                    <div className="row d-flex flex-column">
                        <h2 className="text-center mx-auto">
                            watz hapnin {false && ", User_Name_Here"} ?
                        </h2>
                    </div>

                    <div id="main-row" className="row-5">
                        <h2 className="pt-3 text-center">New Event</h2> 

                        <Outlet />
                        {/* <HomeTable1 /> */}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
