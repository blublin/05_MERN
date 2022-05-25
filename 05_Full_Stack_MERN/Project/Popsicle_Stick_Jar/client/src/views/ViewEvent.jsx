import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Navbar from '../components/Navbar'

const ViewEvent = () => {
    const [attending, setAttending] = useState([])

  return (
    <div class="container p-1">

    <Header />
    <Navbar />
<hr class="mx-5"/>

<div id="main-content" class="row justify-content-between">
    
    {/* <!-- Top Row --> */}
    {/* <div id="event-title" class="row pt-5 gx-0">
            <h2 class="pt-3 text-center">{ event && event.name }</h2>
            { !event_participants.contains(session['user_id']) &&
                <a href="/events/{{ event.id }}/join/{{ session['user_id'] }}" class="btn btn-primary text-center w-25">Request to Join</a>
            }
    </div> */}
    {/* <!-- End Top Row --> */}

    {/* <!-- Main Row Content --> */}
    <div id="main-row"  class="row pt-4 justify-content-around">
        {/* <!-- Short Event Info --> */}
        <div class="col-3 mr-3">
            <table class="table table-sm table-borderless border border-dark w-auto my-auto mx-auto">
                <tbody>
                    <tr>
                        <th>Created By: </th>
                        {/* <td>{ creator }</td> */}
                    </tr>
                    <tr>
                        <th>What: </th>
                        {/* <td>{ event.activity_type }</td> */}
                    </tr>
                    <tr>
                        <th>When: </th>
                        {/* <td>{ event.when }</td> */}
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
        {/* <!-- End Short Event Info --> */}

        {/* <!-- Event Description --> */}
        <div class="col-9"> {/* <!-- Push content left towards short event info --> */}
            <table class="table table-sm table-borderless border border-dark w-auto my-auto mx-auto">
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