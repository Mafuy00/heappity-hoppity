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
                <a href="#contactus">Contact Us</a>
                <a href="#login">Hi, User!</a>
                <img id="login-pic" src="/img/icons8-male-user-48.png" alt="Bank Building Image"> 
            </div>

        </div>
        
        <!-- Main image to welcome users -->
        
        <div class="mainPic">
            <div class="learnScams">
                <p> Learn more about scams here. <br>
                    Be aware and protect yourself from scams!
                </p>

                
            </div>

        </div>

        <!--Scam News-->
        <div class="row row-cols-1 row-cols-md-2 g-4">
            <div class="col">
                <div class="card">
                <img src="/img/buildings.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2>Straits Times: More than 110 suspicious bank accounts with over $400k blocked by UOB or seized by police</h2>
                    <a href="https://www.straitstimes.com/singapore/more-than-110-suspicious-bank-accounts-with-over-400k-blocked-by-uob-or-seized-by-police">Learn More</a>
                </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <img src="/img/mission.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h2>Straits Times: Man allegedly linked to parcel delivery phishing scams charged with cheating, money laundering</h2>
                    <a href="https://www.straitstimes.com/singapore/courts-crime/man-allegedly-linked-to-parcel-delivery-phishing-scams-charged-with-cheating-money-laundering">Learn More</a>
                </div>
                </div>
            </div>
        </div>

        <!-- <div class="row">
            <div class="column">
                <div class="polaroid">
                    <img id="buildings" src="/img/buildings.jpg">
                    <div class="polaroid_container">
                        <h2>Straits Times: More than 110 suspicious bank accounts with over $400k blocked by UOB or seized by police</h2>
                        <a href="https://www.straitstimes.com/singapore/more-than-110-suspicious-bank-accounts-with-over-400k-blocked-by-uob-or-seized-by-police">Learn More</a>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="polaroid-right">
                    <img id="buildings" src="/img/mission.jpg">
                    <div class="polaroid_container">
                        <h2>Straits Times: Man allegedly linked to parcel delivery phishing scams charged with cheating, money laundering</h2>
                        <a href="https://www.straitstimes.com/singapore/courts-crime/man-allegedly-linked-to-parcel-delivery-phishing-scams-charged-with-cheating-money-laundering">Learn More</a>
                    </div>
                </div>
            </div>
                

        </div> -->

    </body>
</template>

    <style scoped>
    body {
        margin: 0px;
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

    /* img {
        height: auto; 
        max-width: 100%;
        object-fit: fill;
    } */

    /*For the main container pic*/
    .mainPic{
        background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url("img/mainMoney2.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        max-width: 100%;
        height: 800px;
        padding: 0%;
        margin: 0%;
        display: flex;
    } 

    .learnScams p {
        margin-left: 20%;
        margin-top: 40%;
        font-weight: bold;
        font-family: Arial, Helvetica, sans-serif;
        text-shadow: 2px 2px 2px black;
        color: white;
        opacity: 1;
        font-size: 40px;
        white-space: nowrap;
        /* display:flex; */
    }

    #signupBtn{
        /* margin-left: 30%; */
        margin-top: 3%;
        font-size: large;
        width:130px;
        height:40px;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 10px;
        font-weight: bold;
        cursor: pointer;
        background-color: #0F4C75;
        color:white;
    }

    #signupBtn:hover {
        background-color: white;
        color:black;
    }

    /* Vision & mission */
    .col {
        padding:5px;
        padding-left: 5px;
    }

    .row{
        padding-left: 5px;
    }

    .card {
        text-align: center;
        width: 99%;
        display: flex;


    }

    .card-title {
        font-weight: bold;
    }

</style>