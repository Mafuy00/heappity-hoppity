<template>

    <head>
        <!-- <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"> -->
    </head>

    <body>
            <!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>  -->
            


            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8 mx-auto">
                        <h2>Accounts</h2>
                        <div class="my-4">
                            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <router-link to="/accounts/account1" class="nav-link" id="home-tab">Account 1</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/accounts/account2" class="nav-link" id="home-tab">Account 2</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/accounts/account3" class="nav-link" id="home-tab">Account 3</router-link>
                                </li>
                            </ul>
                        </div>
                        <button type="button" class="btn btn-lg">Add account</button>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <button type="button" class="btn btn-lg">Delete account</button>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <a href="/accounts/addRecord"><button type="button" class="btn btn-lg">Add record</button></a>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <button type="button" class="btn btn-lg">Delete record</button>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"> Launch demo modal </button> 
<!-- Modal --> <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true"> 
    <div class="modal-dialog" role="document"> <div class="modal-content"> <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5> 
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"> 
            <span aria-hidden="true">&times;</span> </button> </div> 
            <div class="modal-body"> ... </div> 
            <div class="modal-footer"> 
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button> 
                <button type="button" class="btn btn-primary">Save changes</button> </div> </div> </div> </div>

                    </div>
                </div>
            </div>

                <div>
                <router-view />
                </div>


        </body>
</template>


<style scoped>
.recordDelete{
    color:white;
}

.btn{
        color:white;
        font-weight: bold;
        border-color: white;
        width: 20%;
        flex-direction: row;
        flex-wrap: wrap;
        display:inline-block;
        font-size: large;
    }

    .btn:hover{
        background-color: white;
        color: black;
    }

    a {
        color:white;
        text-decoration: none;
    }

body {
    background-color: #0F4C75 !important;
    min-height: 100vh;
}


.topnav {
    background-color: #0F4C75;
    /* overflow: hidden; */
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    
}

/* Style the links inside the navigation bar */
.topnav a {
    float: right;
    color: #f2f2f2;
    text-align: right;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
}

/* Change the color of links on hover */
.topnav a:hover {
    background-color: #ddd;
    color: black;
}

.dropdown {
float: left;
/* overflow: hidden; */
}   

.dropdown .dropbtn {
font-size: 16px;  
border: none;
outline: none;
color: white;
padding: 14px 16px;
background-color: inherit;
/* font-family: inherit; */
margin: 0;
font-size: 17px;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
}

.navbar a:hover, .dropdown:hover .dropbtn {
background-color: white;
color:black;
}

.dropdown-content {
display: none;
position: absolute;
background-color: #f9f9f9;
min-width: 160px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
z-index: -10;
}

.dropdown-content a {
float: none;
color: black;
padding: 12px 16px;
text-decoration: none;
display: block;
text-align: left;
}

.dropdown-content a:hover {
background-color: #0F4C75;
color:white;
}

.dropdown:hover .dropdown-content {
display: block;
/* position: absolute; */
z-index: 10;
}

/* Add a color to the active/current link */
/* .topnav a.active {
    background-color: #BBE1FA;
    color: rgb(27, 38, 44);
} */

#logo {
    width: 50px;
    height: 45px;
    padding: 0px;
    display: flex;
    margin: 0%;
    padding-left: 10px;
}

#companyName {
    color: whitesmoke;
    font-weight: bold;
    padding: 0px;
    display: flex;
    width: 100%;
    margin-left: 10px;
    margin-top: 14px;
}

#login-pic {
    /* float: right; */
    width: 55px;
    height: 45px;
    cursor:pointer;
    padding-right: 10px;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
    float: right;
    display: flex;
    margin: auto;
    white-space: nowrap;
    /* width: max-content; */
    /* width: 100%; */
}

/*Profile tab */
.avatar-xl img {
width: 110px;
}
.rounded-circle {
border-radius: 50% !important;
}
img {
vertical-align: middle;
border-style: none;
}
.text-muted {
color: #ffffff !important;
}
.text-muted {
font-weight: 300;
}
.form-control {
display: block;
width: 100%;
height: calc(1.5em + 0.75rem + 2px);
padding: 0.375rem 0.75rem;
font-size: 0.875rem;
font-weight: 400;
line-height: 1.5;
color: white;
background-color: #ffffff;
background-clip: padding-box;
border: 1px solid #eef0f3;
border-radius: 0.25rem;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

h2{
color:white;
font-weight: bolder;
}

#home-tab{
font-weight: bold;
}

.label{
color:#eef0f3;
font-weight: bold;
}

.nav-link{
color:white;
}

/*Profile tab */
.avatar-xl img {
width: 110px;
}
.rounded-circle {
border-radius: 50% !important;
}
img {
vertical-align: middle;
border-style: none;
}
.text-muted {
color: #ffffff !important;
}
.text-muted {
font-weight: 300;
}
.form-control {
display: block;
width: 100%;
height: calc(1.5em + 0.75rem + 2px);
padding: 0.375rem 0.75rem;
font-size: 0.875rem;
font-weight: 400;
line-height: 1.5;
color: white;
background-color: #ffffff;
background-clip: padding-box;
border: 1px solid #eef0f3;
border-radius: 0.25rem;
transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

h2{
color:white;
font-weight: bolder;
}

#home-tab{
font-weight: bold;
}

.label{
color:#eef0f3;
font-weight: bold;
}

.nav-link:hover, 
.nav-link.router-link-active,
.nav-link.router-link-exact-active{
color:black;
background-color: white;
}


</style>


