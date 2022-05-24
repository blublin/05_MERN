import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import "../css/Home.css"

const Home = () => {
    return (
        <div className="cssReset container p-1">
            <h1>Hello</h1>
            <Header />

            <hr className="mx-5" />
            <Navbar />

            <div id="main-content" className="row justify-content-between">
                <div className="row d-flex flex-column">
                    <h2 className="text-center mx-auto">
                        watz hapnin, {true && "User_Name_Here"} ?
                    </h2>
                </div>

            {/*     <div id="main-row" className="row-5">
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
                                        <a
                                            href="/events/new/couples/casual"
                                            className="btn rounded-0"
                                            style="background-color: crimson;"
                                        >
                                            <strong>Casual</strong>
                                        </a>
                                        <button
                                            type="button"
                                            className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                            style="background-color: rgb(255, 255, 255);color:black;"
                                        >
                                            <strong>Couples Activity</strong>
                                        </button>
                                        <a
                                            href="/events/new/couples/romantic"
                                            className="btn rounded-0"
                                            style="background-color: crimson;"
                                        >
                                            <strong>Romantic</strong>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                        <a
                                            href="/events/new/friends/social"
                                            className="btn rounded-0"
                                            style="background-color:rgb(16, 177, 177)"
                                        >
                                            <strong>Social</strong>
                                        </a>
                                        <button
                                            type="button"
                                            className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                            style="background-color: rgb(255, 255, 255);color:black;"
                                        >
                                            <strong>Friends Activity</strong>
                                        </button>
                                        <a
                                            href="/events/new/friends/close"
                                            className="btn rounded-0"
                                            style="background-color: rgb(16, 177, 177);"
                                        >
                                            <strong>Close</strong>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                        <a
                                            href="/events/new/family/all"
                                            className="btn rounded-0"
                                            style="background-color:rgb(244, 61, 244);"
                                        >
                                            <strong>All Ages</strong>
                                        </a>
                                        <button
                                            type="button"
                                            className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                            style="background-color:rgb(255, 255, 25573);color:black;"
                                        >
                                            <strong>Families Activity </strong>
                                        </button>
                                        <a
                                            href="/events/new/family/adults"
                                            className="btn rounded-0"
                                            style="background-color:rgb(244, 61, 244);"
                                        >
                                            <strong>Adults</strong>
                                        </a>
                                    </div>
                                </td>
                                <td>
                                    <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                        <a
                                            href="/events/new/groups/general"
                                            className="btn rounded-0"
                                            style="background-color: rgb(20, 220, 103);"
                                        >
                                            <strong>General</strong>
                                        </a>
                                        <button
                                            type="button"
                                            className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                            style="background-color: rgb(255, 255, 255);color:black;"
                                        >
                                            <strong>Groups Activity</strong>
                                        </button>
                                        <a
                                            href="/events/new/groups/specialized"
                                            className="btn rounded-0"
                                            style="background-color: rgb(20, 220, 103);"
                                        >
                                            <strong>Specialized</strong>
                                        </a>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div> */}
            </div>
        </div>
    );
};

export default Home;
