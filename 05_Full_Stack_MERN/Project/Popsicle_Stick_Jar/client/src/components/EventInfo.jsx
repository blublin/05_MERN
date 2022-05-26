import React from "react";
import { Link } from "react-router-dom";

const DEBUG = false;

// https://www.w3schools.com/howto/howto_css_table_responsive.asp
// https://vembarrajan.medium.com/html-css-tricks-scroll-able-table-body-tbody-d23182ae0fbc
// https://www.w3docs.com/snippets/html/how-to-create-a-table-with-a-fixed-header-and-scrollable-body.html

const EventInfo = (props) => {
    const {
        users: creator,
        activities: activity,
        when,
        events_has_users: attendees,
    } = props;
    DEBUG && console.log("EventInfo Props:", props);

    return (
        <div className="col-3 mr-3">
            <table className="table table-sm table-borderless border border-dark w-auto my-auto mx-auto">
                <tbody>
                    <tr>
                        <th>Created By: </th>
                        <td>{
                            creator &&
                            <Link to={`/users/${creator.id}`}>{creator.first_name} {creator.last_name}</Link>
                        }</td>
                    </tr>
                    <tr>
                        <th>What: </th>
                        <td>{activity && activity.name}</td>
                    </tr>
                    <tr>
                        <th>When: </th>
                        <td>{when}</td>
                    </tr>
                    <tr>
                        <th>Attending: </th>
                        <td></td>
                    </tr>
                    {attendees &&
                        attendees.slice(0, 10).map((user) => {
                            const { first_name, last_name, id } = user.users;
                            // console.log(first_name, last_name, id);
                            return (
                                <tr>
                                    <td></td>
                                    <td>
                                        <Link to={`/users/${id}`}>
                                            {first_name} {last_name}
                                        </Link>
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};

export default EventInfo;
