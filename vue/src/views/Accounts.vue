<template>
    <body>
            <div class="topnav">
                <div>
                    <img id="logo" src="/img/icons8-bank-building-100.png" alt="Bank Building Image"> 
                    
                </div>
                <p id="companyName">GuidedCents</p>
    
                <div class="topnav-right">
                    <a class="active" href="#home">Home</a>
                    <!-- <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Services</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Accounts</a>
                        <a class="dropdown-item" href="#">Scam News</a>
                        <a class="dropdown-item" href="#">Forecasting</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div> -->
    
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
                    <a href="#contactus">Contact Us</a>
                    <a href="#login">Hi, User!</a>
                    <img id="login-pic" src="/img/icons8-male-user-48.png" alt="Bank Building Image"> 
                </div>
    
            </div>

            <ul class="nav nav-tabs">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Account 1</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Account 2</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Account 3</a>
                </li>
                </ul>
        </body>
</template>

    <style scoped>
    body {
        background-color: #0F4C75 !important;
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

    /*Tab */
    .nav-link{
        color: white;
    }

    .nav-link a:hover{
        background-color: white;
        color:black;
    }

</style>


