<template>

    <body>
        <nav class="nav nav-pills flex-column flex-sm-row">
            <router-link to="/accounts/account1/daily" class="flex-sm-fill text-sm-center nav-link" aria-current="page">Daily</router-link>
            <router-link to="/accounts/account1/weekly" class="flex-sm-fill text-sm-center nav-link" aria-current="page">Weekly</router-link>
            <router-link to="/accounts/account1/monthly" class="flex-sm-fill text-sm-center nav-link" aria-current="page">Monthly</router-link>
        </nav>
        <div>
            <router-view />
        </div>
    </body>
</template>

    <style scoped>
    
    .nav-link:hover, 
    .nav-link.router-link-active,
    .nav-link.router-link-exact-active{
        color:black;
        background-color: white;
        font-weight: bold;
        border-radius: 2px;
    }

    .nav-link{
        font-weight: bold;
    }

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


