import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../css/Home.css"
import { Link } from "react-router-dom";

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
                        watz hapnin, {false && "User_Name_Here"} ?
                    </h2>
                </div>

                <div id="main-row" className="row-5">
                    <h2 className="pt-3 text-center">New Event</h2>
                    <p className="text-center">
                        (Click on a colorful activity header or footer to get
                        started!)
                    </p>

                   <table className="mainTable table table-borderless my-auto mx-auto w-auto text-center table-bg">
                        <tbody>
                            <tr>
                                <td className="pb-3">
                                    <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                        <Link
                                            to="/events/new/couples/casual"
                                            className="btn rounded-0"
                                            style={{backgroundColor: "crimson"}}
                                        >
                                            <strong>Casual</strong>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                            style={{backgroundColor: "rgb(255, 255, 255)", color:"black"}}
                                        >
                                            <strong>Couples Activity</strong>
                                        </button>
                                        <Link
                                            to="/events/new/couples/romantic"
                                            className="btn rounded-0"
                                            style={{backgroundColor: "crimson"}}
                                        >
                                            <strong>Romantic</strong>
                                        </Link>
                                    </div>
                                </td>
                                <td>
                                    <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                        <Link
                                            to="/events/new/friends/social"
                                            className="btn rounded-0"
                                            style={{backgroundColor:"rgb(16, 177, 177)"}}
                                        >
                                            <strong>Social</strong>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                            style={{backgroundColor: "rgb(255, 255, 255)",color:"black"}}
                                        >
                                            <strong>Friends Activity</strong>
                                        </button>
                                        <Link
                                            to="/events/new/friends/close"
                                            className="btn rounded-0"
                                            style={{backgroundColor: "rgb(16, 177, 177)"}}
                                        >
                                            <strong>Close</strong>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                        <Link
                                            to="/events/new/family/all"
                                            className="btn rounded-0"
                                            style={{backgroundColor:"rgb(244, 61, 244)"}}
                                        >
                                            <strong>All Ages</strong>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                            style={{backgroundColor:"rgb(255, 255, 25573)", color:"black"}}
                                        >
                                            <strong>Families Activity </strong>
                                        </button>
                                        <Link
                                            to="/events/new/family/adults"
                                            className="btn rounded-0"
                                            style={{backgroundColor:"rgb(244, 61, 244)"}}
                                        >
                                            <strong>Adults</strong>
                                        </Link>
                                    </div>
                                </td>
                                <td>
                                    <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                        <Link
                                            to="/events/new/groups/general"
                                            className="btn rounded-0"
                                            style={{backgroundColor: "rgb(20, 220, 103)"}}
                                        >
                                            <strong>General</strong>
                                        </Link>
                                        <button
                                            type="button"
                                            className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                            style={{backgroundColor: "rgb(255, 255, 255)", color: "black"}}
                                        >
                                            <strong>Groups Activity</strong>
                                        </button>
                                        <Link
                                            to="/events/new/groups/specialized"
                                            className="btn rounded-0"
                                            style={{backgroundColor: "rgb(20, 220, 103)"}}
                                        >
                                            <strong>Specialized</strong>
                                        </Link>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div> 
        </div>
        </>
    );
};

export default Home;
