<template>
    <body>
            

<div class="container">
<div class="row justify-content-center">
    <div class="col-12 col-lg-10 col-xl-8 mx-auto">
        <!-- <h2>Settings</h2> -->
        <div class="my-4">
            
            <form>
                <div class="row mt-5 align-items-center">
                    <div class="col-md-3 text-center mb-5">
                        <div class="avatar avatar-xl">
                            <img src="https://bootdey.com/img/Content/avatar/avatar6.png" alt="..." class="avatar-img rounded-circle" />
                        </div>
                    </div>
                    <div class="col">
                        <div class="row align-items-center">
                            <div class="col-md-7">
                                <h4 class="label">Brown, Asher</h4>
                                <p class="small mb-3"><span class="badge badge-dark">Edit Profile Picture</span></p>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <!-- <div class="col-md-7">
                                <p class="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris blandit nisl ullamcorper, rutrum metus in, congue lectus. In hac habitasse platea dictumst. Cras urna quam, malesuada vitae risus at,
                                    pretium blandit sapien.
                                </p>
                            </div> -->
                            <!-- <div class="col">
                                <p class="small mb-0 text-muted">Nec Urna Suscipit Ltd</p>
                                <p class="small mb-0 text-muted">P.O. Box 464, 5975 Eget Avenue</p>
                                <p class="small mb-0 text-muted">(537) 315-1481</p>
                            </div> -->
                        </div>
                    </div>
                </div>
                <hr class="my-4" />
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="firstname" class="label">First name</label>
                        <input type="text" id="firstname" class="form-control" placeholder="Brown" />
                    </div>
                    <br>
                    <div class="form-group col-md-6">
                        <label for="lastname" class="label">Last name</label>
                        <input type="text" id="lastname" class="form-control" placeholder="Asher" />
                    </div>
                    <br>
                </div>
                <div class="form-group">
                    <label for="inputEmail4" class="label">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="brown@asher.me" />
                </div>
                <!-- <div class="form-group">
                    <label for="inputAddress5">Address</label>
                    <input type="text" class="form-control" id="inputAddress5" placeholder="P.O. Box 464, 5975 Eget Avenue" />
                </div> -->
                <div class="form-row">
                    <!-- <div class="form-group col-md-6">
                        <label for="inputCompany5">Company</label>
                        <input type="text" class="form-control" id="inputCompany5" placeholder="Nec Urna Suscipit Ltd" />
                    </div> -->
                    <div class="form-group col-md-4">
                        <!-- <label for="inputState5">State</label>
                        <select id="inputState5" class="form-control">
                            <option selected="">Choose...</option>
                            <option>...</option>
                        </select> -->
                    </div>
                    <div class="form-group col-md-2">
                        <!-- <label for="inputZip5">Zip</label>
                        <input type="text" class="form-control" id="inputZip5" placeholder="98232" /> -->
                    </div>
                </div>
                <hr class="my-4" />
                <div class="row mb-4">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="inputPassword4" class="label">Old Password</label>
                            <input type="password" class="form-control" id="inputPassword5" />
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="inputPassword5" class="label">New Password</label>
                            <input type="password" class="form-control" id="inputPassword5" />
                        </div>
                        <br>
                        <div class="form-group">
                            <label for="inputPassword6" class="label">Confirm Password</label>
                            <input type="password" class="form-control" id="inputPassword6" />
                        </div>
                        <br>
                    </div>
                    <div class="col-md-6">
                        <p class="label">Password requirements</p>
                        <p class="small text-muted mb-2">To create a new password, you have to meet all of the following requirements:</p>
                        <ul class="small text-muted pl-4 mb-0">
                            <li>Minimum 8 character</li>
                            <li>At least one special character</li>
                            <li>At least one number</li>
                            <li>Can’t be the same as a previous password</li>
                        </ul>
                    </div>
                </div>
                <button type="submit" class="btn btn-primary">Save Change</button>
            </form>
        </div>
    </div>
</div>

</div>

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

</style>


