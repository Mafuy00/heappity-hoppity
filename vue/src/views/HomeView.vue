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
            
                <router-link to="/login">Login</router-link>
                <img id="login-pic" src="/img/icons8-male-user-48.png" alt="Bank Building Image"> 
            </div>

        </div>
        
        <!-- Main image to welcome users -->
        
        <div class="mainPic">
            <div class="signup">
                <p> 
                    Tailor the theme to your needs here:<br>
                    <button type="button" class="btn btn-lg">Light</button>
                    &nbsp&nbsp
                    <button type="button" class="btn btn-lg">Dark</button>
                    <br>
                    <button type="button" class="btn btn-lg">Contrasting palette 1</button>
                    &nbsp&nbsp
                    <button type="button" class="btn btn-lg">Contrasting palette 2</button>
                    <br>
                    <button type="button" class="btn btn-lg">Vibrant</button>
                    &nbsp&nbsp
                    <button type="button" class="btn btn-lg">Monochromatic</button>
                    <br>
                    <button type="button" class="btn btn-lg">Red-Green Color</button>
                    &nbsp&nbsp
                    <button type="button" class="btn btn-lg">Blue-Yellow Color</button>
                    <br><br>
                    Start your Financial Journey Here! <br>
                    Sign up now!<br>
                    <router-link to="/register"><input type="button" value="Sign Up" id="signupBtn"></router-link>
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

.btn{
        color:white;
        font-weight: bold;
        border-color: black;
        width: 300px;
        flex-direction: row;
        flex-wrap: wrap;
        display:inline-block;
        background-color: #0F4C75;
    }

    .btn:hover{
        background-color: white;
        color: black;
    }

body{
    margin: 0px;
    border:0px;
}

.topnav {
    background-color: #0F4C75;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
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
  
  /* Add a color to the active/current link */
  /* .topnav a.active {
    background-color: #BBE1FA;
    color: rgb(27, 38, 44);
  } */

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
    margin-top: 15%;
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

</style>

