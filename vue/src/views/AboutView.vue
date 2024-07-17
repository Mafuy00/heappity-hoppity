<template>
  <div class="mainPic">
    <div class="signup">
          <p> 
            We are a small team of aspiring developers that 
            <br>want to design a web application that is accessible for PWDs, 
            <br>mainly the visually impaired, by incorporating assistive technologies such as screen reader 
            <br>and speech-to-text, that will aid them in navigating our web app and learn the contents.
            <br>Our app will include courses related to finance and budgeting, 
            <br>providing comprehensive financial awareness resources within the app. 
            <br>The dashboard showcasing their information in an easy-to-understand manner 
            <br>will help them visualise their financial management.
          </p> 
      </div>
  </div>

</template>

<style scoped> 
/*For the main container pic*/
.mainPic{
    background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)),url("img/team.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 100%;
    height: 900px;
    padding: 0%;
    margin: 0%;
    display: flex;
    width: 100%;
} 

.signup p {
    margin-left: 2%;
    margin-top: 10%;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    text-shadow: 2px 2px 2px black;
    color: white;
    opacity: 1;
    font-size: 40px;
    white-space: nowrap;
    text-align: left;
}
</style>
