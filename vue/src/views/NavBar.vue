<template>
    <body>
        <div class="topnav">
            <div>
                <img id="logo" src="/img/icons8-bank-building-100.png" alt="Bank Building Image"> 
                
            </div>
            <p id="companyName">GuidedCents</p>

            <div class="topnav-right">
                <router-link to="/mainPage">Home</router-link>

                <div class="dropdown">
                    <button class="dropbtn">Services
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <router-link to="/accounts">Accounts</router-link>
                    <router-link to="/scamNews">Scam News</router-link>
                    <router-link to="/mainForecasting">Forecasting</router-link>
                    </div>
                </div> 

                
                <a href="#aboutus">About Us</a>
                <div class="dropdown">
                    <button class="dropbtn">Hi, Asher Brown!
                    <i class="fa fa-caret-down"></i>
                    </button>
                    <div class="dropdown-content">
                    <router-link to="/settings">Settings</router-link>
                    <router-link to="/">Logout</router-link>
                    </div>
                </div> 
                <img id="login-pic" src="/img/icons8-male-user-48.png" alt="Bank Building Image"> 
            </div>

        </div>

        <div>
            <router-view />
        </div>

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
        font-size: 20px;
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
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    /* font-family: inherit; */
    margin: 0;
    font-size: 20px;
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

    
    .dropdown {
    float: left;
    /* overflow: hidden; */
    }   

    .dropdown .dropbtn {
    font-size: 20px;  
    border: none;
    outline: none;
    color: white;
    padding: 14px 16px;
    background-color: inherit;
    /* font-family: inherit; */
    margin: 0;
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
  
  #logo {
      width: 55px;
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

  </style>