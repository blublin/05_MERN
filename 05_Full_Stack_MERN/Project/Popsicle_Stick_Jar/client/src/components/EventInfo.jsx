import React, { useState } from "react";
import { Link } from "react-router-dom";

const DEBUG = false;

const EventInfo = (props) => {
    const [whenState, setWhenState] = useState("");
    const { users: creator, activities: activity, when, events_has_users: attendees } = props;
    console.log("EventInfo Props:", props)

    // https://www.freecodecamp.org/news/how-to-format-dates-in-javascript/
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat
    const dateOptions = {
        weekday: "long",
        year: "2-digit",
        month: "short",
        day: "numeric",
        hour:"numeric",
        minute: "2-digit",
        hour12: "true"
    }

    const o = new Intl.DateTimeFormat("en", dateOptions);


    return (
        <div className="col-3 mr-3">
            <table className="table table-sm table-borderless border border-dark w-auto my-auto mx-auto">
                <tbody>
                    <tr>
                        <th>Created By: </th>
                        <td>{
                            creator &&
                            `${creator.first_name} ${creator.last_name}`
                        }</td>
                    </tr>
                    <tr>
                        <th>What: </th>
                        <td>{
                            activity &&
                            activity.name
                        }</td>
                    </tr>
                    <tr>
                        <th>When: </th>
                        <td>{
                        whenState &&
                        whenState
                        }</td>
                    </tr>
                    <tr>
                        <th>Attending: </th>
                        {/* <!-- https://www.w3schools.com/howto/howto_css_table_responsive.asp -->
                <!-- https://vembarrajan.medium.com/html-css-tricks-scroll-able-table-body-tbody-d23182ae0fbc -->
                <!-- https://www.w3docs.com/snippets/html/how-to-create-a-table-with-a-fixed-header-and-scrollable-body.html --> */}

                        {/* { attenting && 
                    attending.map( user => {
                    return  (
                        <td>
                            <Link to={`/users/${user.id}`}>{user.first_name } { user.last_name }</Link>
                        </td>
                    )
                })} */}
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default EventInfo;
