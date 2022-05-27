import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import EventInfo from "../components/EventInfo";
import { useParams } from "react-router-dom";
import axios from "axios";
import EventDescription from "../components/EventDescription";

const DEBUG = true;

const ViewEvent = () => {
    const { e_id } = useParams();
    const [eventState, setEventState] = useState({});
    /*
     * id : int
     * when: string (DATETIME)
     * twentyOnePlus: 0|1|boolean
     * description: string
     * creator_id: int
     * users: {first_name, last_name, id}
     * cities: {city, state}
     * activity: {name}
     * events_has_users: [ {first_name, last_name, id}, {}, {}]
     */

    // https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: "true",
    };

    const dateFormatter = new Intl.DateTimeFormat("en", dateOptions);

    useEffect(() => {
        axios
            .get(`http://localhost:8000/api/events/${e_id}`, {
                withCredentials: true,
            })
            .then((eventInfo) => {
                DEBUG && console.log(eventInfo.data[0]);
                // convert string formatted date to Date with options
                const when = dateFormatter.format(
                    Date.parse(eventInfo.data[0].when)
                );
                DEBUG && console.log("When:", when);
                setEventState({
                    ...eventInfo.data[0],
                    when,
                });
            });
    }, []);

    return (
        <div className="container p-1">
            <Header />
            <Navbar />
            <hr className="mx-5" />

            <div id="main-content" className="row justify-content-between">
                {/* <!-- Top Row --> */}
                <div id="event-title" className="row pt-5 gx-0">
                    <h2 className="pt-3 text-center">
                        {eventState.name || ""}
                    </h2>
                    {/* { !event_participants.contains(session['user_id']) &&
                <a href="/events/{{ event.id }}/join/{{ session['user_id'] }}" className="btn btn-primary text-center w-25">Request to Join</a>
                    } */}
                </div>
                {/* <!-- End Top Row --> */}

                {/* <!-- Main Row Content --> */}
                <div id="main-row" className="row pt-4 justify-content-around">
                    {/* <!-- Short Event Info --> */}
                    <EventInfo {...eventState} />

                    {/* <!-- End Short Event Info --> */}

                    {/* <!-- Event Description --> */}
                    <EventDescription {...eventState} />
                </div>
                {/* <!-- End Main Row Content --> */}
            </div>
            {/* <!-- End Main Body --> */}
        </div>
    );
};

export default ViewEvent;
