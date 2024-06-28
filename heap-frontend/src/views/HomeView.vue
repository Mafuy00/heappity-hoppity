<!-- <script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script> -->

<template>
  <!-- <main>
    <TheWelcome />
  </main> -->
  <!-- <head>
        <title>GuidedCents</title>
        <link rel="stylesheet" href="./heap_frontend/css/mainpage_firstClick.css">
        
    </head> -->

    

    <body>
        <div class="topnav">
            <div>
                <img id="logo" src="/img/icons8-bank-building-100.png" alt="Bank Building Image"> 
                
            </div>
            <p id="companyName">GuidedCents</p>

            <div class="topnav-right">
                <a class="active" href="#home">Home</a>
                <a href="#aboutus">About Us</a>
                <a href="#contactus">Contact Us</a>
            
                <a href="#login">Login</a>
                <img id="login-pic" src="/img/icons8-male-user-48.png" alt="Bank Building Image"> 
            </div>

        </div>
        
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
        <div class="row">
            <div class="column">
                <div class="polaroid">
                    <img id="buildings" src="/img/buildings.jpg">
                    <div class="polaroid_container">
                        <h1>Our Vision</h1>
                        <center>Redesigning financial accessibility for inclusivity</center>
                    </div>
                </div>
            </div>

            <div class="column">
                <div class="polaroid-right">
                    <img id="buildings" src="/img/mission.jpg">
                    <div class="polaroid_container">
                        <h1>Our Mission</h1>
                        <center>Assisting Persons with Disabilities in accessing critical financial information</center>
                    </div>
                </div>
            </div>
                

        </div>

    </body>
</template>

<style scoped>
body {
    margin: 0px;
}

.topnav {
    background-color: #0F4C75;
    overflow: hidden;
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
  
  /* Add a color to the active/current link */
  /* .topnav a.active {
    background-color: #BBE1FA;
    color: rgb(27, 38, 44);
  } */

#logo {
    width: 45px;
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
}

#login-pic {
    /* float: right; */
    width: 45px;
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
.row {
    display: flex;
  }

.column {
    flex: 80%;
    padding: 5px;
}

div.polaroid {
    width: 98%;
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
  }

#buildings{
    width: 100%;
}  

div.polaroid-right{
    width: 98%;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    margin-bottom: 25px;
    margin-top: 10px;
    margin-right: 10px;
    float: right;
    font-size: 20px;
  }
</style>

