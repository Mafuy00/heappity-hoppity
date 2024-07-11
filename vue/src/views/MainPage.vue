<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<template>  
      <body>
        
          
          <!-- Main image to welcome users -->
          
          <div class="mainPic">
              <div class="signup">
                  <p> Start your Financial Journey Here! <br>
                      Sign up now!<br>
                      <input type="button" value="Sign Up" id="signupBtn">
                  </p>
  
                  
              </div>
  
          </div>
  
          <!--Vision & Mission-->
  
          <div class="card-deck">
              <div class="card">
                  <img src="/img/buildings.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3 class="card-title">Our Vision</h3>
                      <p class="card-text">Redesigning financial accessibility for inclusivity</p>
                  </div>
              </div>
              <div class="card">
                  <img src="/img/mission.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3 class="card-title">Our Mission</h3>
                      <p class="card-text">Assisting Persons with Disabilities in accessing critical financial information</p>
                  </div>
              </div>
          </div>
  
  
              <!-- <div class="col">
                  <div class="card">
                  <img src="/img/buildings.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3 class="card-title">Our Vision</h3>
                      <p class="card-text">Redesigning financial accessibility for inclusivity</p>
                  </div>
                  </div>
              </div>
              <div class="col">
                  <div class="card">
                  <img src="/img/mission.jpg" class="card-img-top" alt="...">
                  <div class="card-body">
                      <h3 class="card-title">Our Mission</h3>
                      <p class="card-text">Assisting Persons with Disabilities in accessing critical financial information</p>
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
      width: 100%;
  } 
  
  .signup p {
      margin-left: 30%;
      margin-top: 50%;
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
  /* 
  .col {
      padding:5px;
      padding-left: 10px;
      width: 600px;
  } */
  
  .card-deck{
      padding-left: 3px;
      padding-top: 5px;
      width: 100%;
      display: flex;
  }
  
  .card {
      text-align: center;
      /* width: 90%; */
      display: flex;
  }
  
  .card-img-top{
      border-radius: 5px;
  }
  
  .card-title {
      font-weight: bold;
  }
  
  
  
  /* .row {
      display: flex;
    }
  
  .column {
      flex: 80%;
      padding: 5px;
  }
  
  div.polaroid {
      width: 48%;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      margin-bottom: 25px;
      margin-top: 10px;
      margin-left: 10px;
      font-size: 20px;
    }
    
    div.polaroid_container {
      text-align: center;
      padding: 10px 20px;
      font-family: Arial, Helvetica, sans-serif;
    } */
  
  /* #buildings{
      width: 100%;
  }   */
  
  /* div.polaroid-right{
      width: 48%;
      background-color: white;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
      margin-bottom: 25px;
      margin-top: 10px;
      margin-right: 10px;
      float: right;
      font-size: 20px;
    } */
  
  
  
  </style>
  
  