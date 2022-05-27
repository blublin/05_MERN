import React from "react";
import { Link } from "react-router-dom";

const HomeTable1 = () => {
    return (
        <>
            <p className="text-center">
                (Click on a colorful activity header or footer to get started!)
            </p>
            <table className="mainTable table table-borderless my-auto mx-auto w-auto text-center table-bg">
                <tbody>
                    <tr>
                        <td className="pb-3">
                            <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                <Link
                                    to="/dashboard/couples/casual"
                                    className="btn rounded-0"
                                    style={{
                                        backgroundColor: "crimson",
                                    }}
                                >
                                    <strong>Casual</strong>
                                </Link>
                                <button
                                    type="button"
                                    className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                    style={{
                                        backgroundColor: "rgb(255, 255, 255)",
                                        color: "black",
                                    }}
                                >
                                    <strong>Couples Activity</strong>
                                </button>
                                <Link
                                    to="/dashboard/couples/romantic"
                                    className="btn rounded-0"
                                    style={{
                                        backgroundColor: "crimson",
                                    }}
                                >
                                    <strong>Romantic</strong>
                                </Link>
                            </div>
                        </td>
                        <td>
                            <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                <Link
                                    to="/dashboard/friends/social"
                                    className="btn rounded-0"
                                    style={{
                                        backgroundColor: "rgb(16, 177, 177)",
                                    }}
                                >
                                    <strong>Social</strong>
                                </Link>
                                <button
                                    type="button"
                                    className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                    style={{
                                        backgroundColor: "rgb(255, 255, 255)",
                                        color: "black",
                                    }}
                                >
                                    <strong>Friends/Solo Activity</strong>
                                </button>
                                <Link
                                    to="/dashboard/friends/tight-knit"
                                    className="btn rounded-0"
                                    style={{
                                        backgroundColor: "rgb(16, 177, 177)",
                                    }}
                                >
                                    <strong>Tight-knit</strong>
                                </Link>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                <Link
                                    to="/dashboard/family/all"
                                    className="btn rounded-0"
                                    style={{
                                        backgroundColor: "rgb(244, 61, 244)",
                                    }}
                                >
                                    <strong>All Ages</strong>
                                </Link>
                                <button
                                    type="button"
                                    className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                    style={{
                                        backgroundColor: "rgb(255, 255, 25573)",
                                        color: "black",
                                    }}
                                >
                                    <strong>Families Activity </strong>
                                </button>
                                <Link
                                    to="/dashboard/family/adults"
                                    className="btn rounded-0"
                                    style={{
                                        backgroundColor: "rgb(244, 61, 244)",
                                    }}
                                >
                                    <strong>Adults</strong>
                                </Link>
                            </div>
                        </td>
                        <td>
                            <div className="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                                <Link
                                    to="/dashboard/groups/general"
                                    className="btn rounded-0"
                                    style={{
                                        backgroundColor: "rgb(20, 220, 103)",
                                    }}
                                >
                                    <strong>General</strong>
                                </Link>
                                <button
                                    type="button"
                                    className="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase"
                                    style={{
                                        backgroundColor: "rgb(255, 255, 255)",
                                        color: "black",
                                    }}
                                >
                                    <strong>Groups Activity</strong>
                                </button>
                                <Link
                                    to="/dashboard/groups/specialized"
                                    className="btn rounded-0"
                                    style={{
                                        backgroundColor: "rgb(20, 220, 103)",
                                    }}
                                >
                                    <strong>Specialized</strong>
                                </Link>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default HomeTable1;
