<template>
    <body>
            <div class="topnav">
                <div>
                    <img id="logo" src="/img/icons8-bank-building-100.png" alt="Bank Building Image"> 
                    
                </div>
                <p id="companyName">GuidedCents</p>
    
                <div class="topnav-right">
                    <a class="active" href="#home">Home</a>
    
                    <div class="dropdown">
                        <button class="dropbtn">Services
                        <i class="fa fa-caret-down"></i>
                        </button>
                        <div class="dropdown-content">
                        <a href="#">Accounts</a>
                        <a href="#">Scam News</a>
                        <a href="#">Forecasting</a>
                        </div>
                    </div> 
    
                    
                    <a href="#aboutus">About Us</a>
                    <a href="#login">Hi, Asher Brown!</a>
                    <img id="login-pic" src="/img/icons8-male-user-48.png" alt="Bank Building Image"> 
                </div>
    
            </div>


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
                        <p class="recordDelete">add delete accounts and record buttons here</p>
                        

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


