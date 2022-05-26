import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import EventInfo from '../components/EventInfo'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DEBUG = true;


const ViewEvent = () => {
    const {e_id} = useParams();
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

    useEffect( () => {
        axios
            .get(`http://localhost:8000/api/events/${e_id}`)
            .then( eventInfo => {
                DEBUG && console.log(eventInfo.data[0]);
                const when = o.format(Date.parse(eventInfo.data[0].data[0].when))
                DEBUG && console.log("When:", when)
                setEventState({
                    ...eventInfo.data[0],
                    when
                })
            })
    }, [])

  return (
    <div className="container p-1">

    <Header />
    <Navbar />
<hr className="mx-5"/>

<div id="main-content" className="row justify-content-between">
    
    {/* <!-- Top Row --> */}
    {/* <div id="event-title" className="row pt-5 gx-0">
            <h2 className="pt-3 text-center">{ event && event.name }</h2>
            { !event_participants.contains(session['user_id']) &&
                <a href="/events/{{ event.id }}/join/{{ session['user_id'] }}" className="btn btn-primary text-center w-25">Request to Join</a>
            }
    </div> */}
    {/* <!-- End Top Row --> */}

    {/* <!-- Main Row Content --> */}
    <div id="main-row"  className="row pt-4 justify-content-around">
        {/* <!-- Short Event Info --> */}
        <EventInfo {...eventState}/>

        {/* <!-- End Short Event Info --> */}

        {/* <!-- Event Description --> */}
        <div className="col-9"> {/* <!-- Push content left towards short event info --> */}
            <table className="table table-sm table-borderless border border-dark w-auto my-auto mx-auto">
                <thead>
                    <tr>
                        <th>Description:</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {/* <td>{ event.description }</td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    {/* <!-- End Main Row Content --> */}

</div>
{/* <!-- End Main Body --> */}

</div>
  )
}

export default ViewEvent