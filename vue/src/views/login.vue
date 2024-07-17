<template>
    <body>
        <div id="image">
            <img id="logo" src="/img/icons8-bank-building-100.png" alt="Bank Building Image"> 
            <p id="companyName">GuidedCents</p>
        </div>
        
        
        <div id="main">
            <div id="login">
                <h1>Login/Register</h1>
                <div>
                    <input id="username" type="text" placeholder="Username">
                </div>
                <div>
                    <input id="password" type="password" placeholder="Password">
                </div>
                <div>
                    <router-link to="/mainPage">
                        <button id="login-btn">Login</button>
                    </router-link>
                    <router-link to="/register">
                        <button id="register-btn">Register</button>
                    </router-link>
                    <br>
                    <router-link to="/">
                        <b class="bi bi-arrow-return-left">Back</b>
                    </router-link>
                    
                </div>
            </div>

            <!-- <div id="nav-link">
                <ul>
                    <li>
                        <a href="...">Forgot <b>Username</b> OR <b>Password</b></a>
                    </li>
                    <li>
                        <a href="...">Frequently Asked Questions (FAQ)</a>
                    </li>
                    <li>
                        <a href="...">Help & Support</a>
                    </li>
                    <li>
                        <router-link to="/">
                            <a href="..."><i class="pi pi-left-arrow"></i>Back</a>
                        </router-link>
                    </li>
                </ul>
            </div> -->

        </div>

    </body>
</template>

<style scoped>
    body {
        margin: 0px;
        border: 0px;
        background-color: #0F4C75;
        height: 100vh;
        width: 100vw;
    }
    
    #main {
        display: flex;
        justify-content: space-around;
        height: 75%;
    }

    #image{
        display: flex;
        padding: 1%;
    }

    #logo {
        width: 5%;
        height: 4%;
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
        margin-top: 28px;
        font-size: 30px;
    }

    #login {
        background-color: white;
        border: solid black 2px;
        border-radius: 2%;
        width: 40%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 20px;
    }

    #nav-link{
        width: 40%;
        display: flex;
        align-items: center;
    }

    li {
        list-style-type: none;
        padding-bottom: 3%;
        font-size: 1.25em;
    }

    a {
        color: black;
        text-decoration: none;
    }

    input {
        width: 80%;
        margin: 1%;
        border: 0px;
        border-bottom: solid black 1px;
        padding-bottom: 3%;
        outline: 0px;
    }

    button {
        width: 80%;
        margin: 1%;
    }

    #login-btn{
        background-color: #0F4C75;
        color: white;
        border: solid black 1px;
        height: 7vh;
    }

    #login-btn:hover{
        background-color: black;
        color: white;
    }

    #register-btn{
        background-color: white;
        color: black;
        border: solid black 1px;
        height: 7vh;
    }

    #register-btn:hover{
        background-color: black;
        color: white;
    }

    .bi:hover{
        text-decoration: underline;
    }

</style>