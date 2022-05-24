import React from 'react'

const Dashboard = () => {
  return (
    <div class="container p-1">

<!-- Nav Bar -->
<div class="row title-blur my-3">
    <h1 class="text-center display-2">The Popsicle Jar</h1>
    <h3 class="text-center display-6">What fun will you pick?</h3>
</div>
<div class="col px-5 d-flex justify-content-between align-items-end">
    <a href="/groups/new" class="btn btn-outline-success">New Group</a>
    <a href="/users/me" class="btn btn-outline-success">Account</a>
    <a href="/logout" class="btn btn-outline-danger">Logout</a>
</div>
<hr class="mx-5">
<!-- End Nav Bar -->

<!-- Main Body -->
<div id="main-content" class="row justify-content-between">
    
    <!-- Top Row -->
    <div class="row d-flex flex-column">
        <h2 class="text-center mx-auto">watz hapnin, {{ session['user_name'] }}?</h2>
    </div>
    <!-- End Top Row -->
    
    <!-- Main Row Content -->
    <div id="main-row" class="row-5">
        <h2 class="pt-3 text-center">New Event</h2>
        <p class="text-center">(Click on a colorful activity header or footer to  get started!)</p>

        <table class="table table-borderless my-auto mx-auto w-auto text-center table-bg">
            <tbody>
                <tr>
                    <td class="pb-3">
                        <div class="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                            <a href="/events/new/couples/casual" class="btn rounded-0" style="background-color: crimson;"><strong>Casual</strong></a>
                            <button type="button" class="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase" style="background-color: rgb(255, 255, 255);color:black;"><strong>Couples Activity</strong></button>
                            <a href="/events/new/couples/romantic" class="btn rounded-0" style="background-color: crimson;"><strong>Romantic</strong></a>
                        </div>
                    </td>
                    <td>
                        <div class="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                            <a href="/events/new/friends/social" class="btn rounded-0" style="background-color:rgb(16, 177, 177)"><strong>Social</strong></a>
                            <button type="button" class="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase" style="background-color: rgb(255, 255, 255);color:black;"><strong>Friends Activity</strong></button>
                            <a href="/events/new/friends/close" class="btn rounded-0" style="background-color: rgb(16, 177, 177);"><strong>Close</strong></a>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div class="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                            <a href="/events/new/family/all" class="btn rounded-0" style="background-color:rgb(244, 61, 244);"><strong>All Ages</strong></a>
                            <button type="button" class="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase" style="background-color:rgb(255, 255, 25573);color:black;"><strong>Families Activity </strong></button>
                            <a href="/events/new/family/adults" class="btn rounded-0" style="background-color:rgb(244, 61, 244);"><strong>Adults</strong></a>
                        </div>
                    </td>
                    <td>
                        <div class="row mb-2 mb-md-0 btn-block mx-5 border border-white">
                            <a href="/events/new/groups/general" class="btn rounded-0" style="background-color: rgb(20, 220, 103);"><strong>General</strong></a>
                            <button type="button" class="btn rounded-0 border-0 btn-outline-primary disabled btn-block text-uppercase" style="background-color: rgb(255, 255, 255);color:black;"><strong>Groups Activity</strong></button>
                            <a href="/events/new/groups/specialized" class="btn rounded-0" style="background-color: rgb(20, 220, 103);"><strong>Specialized</strong></a>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

</div>
<!-- End Main Body -->

</div>
  )
}

export default Dashboard