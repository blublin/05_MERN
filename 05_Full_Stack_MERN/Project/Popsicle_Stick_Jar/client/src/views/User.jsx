import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

const DEBUG = true;

const User = () => {
    const { u_id } = useParams();
    const [userState, setUserState] = useState({});
    const [friends, setFriends] = useState([]);
    const [groups, setGroups] = useState([]);
    const [events, setEvents] = useState([]);

    const dateOptions = {
        month: "long",
        day: "numeric",
    };

    const dateFormatter = new Intl.DateTimeFormat("en", dateOptions);

    useEffect(() => {
        // Get User info
        axios
            .get(`http://localhost:8000/api/users/${u_id}`, {
                withCredentials: true,
            })
            .then((userInfo) => {
                DEBUG && console.log("User Info:", userInfo.data);
                // convert string formatted date to Date with options
                const birthday = dateFormatter.format(
                    Date.parse(userInfo.data.birthday)
                );
                DEBUG && console.log("birthday:", birthday);
                setUserState({
                    ...userInfo.data,
                    birthday,
                });
            })
            .catch((err) => console.log("User get failed", err.response.data));
        // Get User events info
        axios
            .get(`http://localhost:8000/api/users/events/${u_id}`, {
                withCredentials: true,
            })
            .then((events) => {
                DEBUG && console.log("Events Info:", events.data);
                setEvents(events.data);
            })
            .catch((err) =>
                console.log("Events get failed", err.response.data)
            );
        // Get User friends info
        axios
            .get(`http://localhost:8000/api/users/friends/${u_id}`, {
                withCredentials: true,
            })
            .then((friends) => {
                DEBUG && console.log("Friends Info:", friends.data);
                setFriends(friends.data);
            })
            .catch((err) =>
                console.log("Friends get failed", err.response.data)
            );
        // Get User group info
        axios
            .get(`http://localhost:8000/api/users/groups/${u_id}`, {
                withCredentials: true,
            })
            .then((groups) => {
                DEBUG && console.log("Groups Info:", groups.data);
                setGroups(groups.data);
            })
            .catch((err) => console.log("Group get failed", err.response.data));
    }, []);
    return (
        <div>
            <Header />
            <Navbar />
            <div className="d-flex justify-content-evenly">
                {/* Left Column - User Info */}
                <div
                    id="leftCol"
                    className="mt-4 col-3 d-flex flex-column align-items-center border border-info rounded"
                >
                    <img
                        src={
                            (userState &&
                                userState.avatar &&
                                require(`../imgs/avatars/avatar_${userState.avatar}.png`)) ||
                            require("../imgs/avatars/avatar_01.png")
                        }
                        alt="User Avatar"
                        style={{ width: "200px" }}
                    />
                    <h3 className="mt-2">
                        {userState.first_name || "Loading"}{" "}
                        {userState.last_name || ""}
                    </h3>
                    <p className="mt-2">
                        Email: {userState.email || "Loading..."}
                    </p>
                    <p className="mt-2">
                        Birthday: {userState.birthday || "Loading..."}
                    </p>
                </div>
                {/* Middle Column - Friends */}
                <div
                    id="midCol"
                    className="mt-4 col-3 d-flex flex-column align-items-center border border-info rounded"
                >
                    {friends && (
                        <>
                            <h3>Friends</h3>
                            <hr className="w-75" />
                            {friends.map((friend, idx) => {
                                const {
                                    first_name: fName,
                                    last_name: lName,
                                    id,
                                } = friend.users_friends_friend_idTousers;
                                console.log(
                                    "Friend Map info:",
                                    fName,
                                    lName,
                                    id
                                );
                                return (
                                    <Link to={`/user/${id}`} className="mb-1">
                                        {fName} {lName}
                                    </Link>
                                );
                            })}
                        </>
                    )}
                </div>
                <div
                    id="rightCol"
                    className="mt-4 col-3 d-flex flex-column justify-items-between align-items-center border border-info rounded"
                >
                    {groups && (
                        <>
                            <h3>Groups</h3>
                            <hr className="w-75" />
                            {groups.map((group, idx) => {
                                const {
                                    name,
                                    id
                                } = group.groups;
                                console.log(
                                    "Group Map info:",
                                    name,
                                    id
                                );
                                return (
                                    <Link to={`/group/${id}`} className="mb-1">
                                        {name}
                                    </Link>
                                );
                            })}
                        </>
                    )}
                    {events && (
                        <>
                            {groups && events && 
                            <hr className="w-100" />
                            }
                            <h3>Events</h3>
                            <hr className="w-75" />
                            {events.map((event, idx) => {
                                const {
                                    name,
                                    id
                                } = event.events;
                                console.log(
                                    "event Map info:",
                                    name,
                                    id
                                );
                                return (
                                    <Link to={`/event/${id}`} className="mb-1">
                                        {name}
                                    </Link>
                                );
                            })}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default User;
