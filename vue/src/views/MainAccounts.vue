<template>
    <body>
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-12 col-lg-10 col-xl-8 mx-auto">
                        <h2>Accounts</h2>
                        <div class="my-4">
                            <ul class="nav nav-tabs mb-4" id="myTab" role="tablist">
                                <li class="nav-item">
                                    <router-link to="/accounts/account1" class="nav-link" id="home-tab">Account 1</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/accounts/account2" class="nav-link" id="home-tab">Account 2</router-link>
                                </li>
                                <li class="nav-item">
                                    <router-link to="/accounts/account3" class="nav-link" id="home-tab">Account 3</router-link>
                                </li>
                            </ul>
                        </div>

                        <!--Add Account Modal-->
                        <div class="modal fade" id="mymodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Account</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Bank Account Name</label>
                                        <input type="text" class="form-control" id="accountName">
                                        
                                    </div>
                                    <button type="submit" class="btn btn-primary">Create</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>

                            <!--Delete Account Modal-->
                        <div class="modal fade" id="deletemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Delete Account</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <form>
                                    <div class="mb-3">
                                        <label for="exampleInputEmail1" class="form-label">Bank Account Name</label>
                                        <input type="text" class="form-control" id="accountName">
                                        
                                    </div>
                                    <button type="submit" class="btn btn-danger">Delete</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>
                        
                        <!--Add Record Modal-->
                        <div class="modal fade" id="addrecord" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Add Record</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <form @submit.prevent="addRecord">
                                    <div class="mb-3">
                                        <label for="Date" class="form-label">Date (DD/MM/YYYY)</label>
                                        <input type="text" class="form-control" id="date" placeholder="Date (DD/MM/YYYY)" v-model="formData.date_time">
                                    </div>
                                    <div class="form-group">
                                    <label for="formGroupExampleInput2">Category</label>
                                    <br>
                                    <select name="category" id="category" class="form-control" v-model="formData.category">
                                        <option value="Food">Food</option>
                                        <option value="Transport">Transport</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Personal Care">Personal Care</option>
                                        <option value="Medical">Medical Expenses</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Gifts">Gifts & Donations</option>
                                        <option value="Social">Social Activities</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    <br>
                                <div class="form-group">
                                    <label for="formGroupExampleInput3">Description (Credit/Debit)</label>
                                    <select name="description" id="description" class="form-control" v-model="formData.transaction_type">
                                        <option value="credit">Credit</option>
                                        <option value="debit">Debit</option>
                                    </select>
                                </div>
                                <br>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Amount</label>
                                    <input type="number" class="form-control" id="formGroupExampleInput" placeholder="Amount (E.g: 48.10)" step="0.01" v-model="formData.amount">
                                </div>
                                <br>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Bank Type</label>
                                    <select name="bankType" id="bankType" class="form-control" v-model="formData.bank">
                                        <option value="DBS">DBS</option>
                                        <option value="POSB">POSB</option>
                                        <option value="UOB">UOB</option>
                                        <option value="OCBC">OCBC</option>
                                        <option value="Citibank">Citibank</option>
                                        <option value="HSBC">HSBC</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <br>
                                <div class="form-group">
                                    <label for="formGroupExampleInput3">Account</label>
                                    <select name="description" id="description" class="form-control" v-model="formData.accountid">
                                        <option value="account1">Account 1</option>
                                        <option value="account2">Account 2</option>
                                        <option value="account2">Account 3</option>
                                    </select>
                                </div>
                                <br>
                                </div>
                                    <button type="submit" class="btn btn-primary">Add</button>
                                    </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>

                        <!--Delete Record Modal-->
                        <div class="modal fade" id="deleterecord" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Delete Record</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <form @submit.prevent="deleteRecord">
                                    <div class="mb-3">
                                        <label for="Date" class="form-label">Date (DD/MM/YYYY)</label>
                                        <input type="text" class="form-control" id="date" placeholder="Date (DD/MM/YYYY)" v-model="formData.date_time">
                                    </div>
                                    <div class="form-group">
                                    <label for="formGroupExampleInput2">Category</label>
                                    <br>
                                    <select name="category" id="category" class="form-control" v-model="formData.category">
                                        <option value="Food">Food</option>
                                        <option value="Transport">Transport</option>
                                        <option value="Entertainment">Entertainment</option>
                                        <option value="Personal Care">Personal Care</option>
                                        <option value="Medical">Medical Expenses</option>
                                        <option value="Travel">Travel</option>
                                        <option value="Gifts">Gifts & Donations</option>
                                        <option value="Social">Social Activities</option>
                                        <option value="Others">Others</option>
                                    </select>
                                    <br>
                                <div class="form-group">
                                    <label for="formGroupExampleInput3">Description (Credit/Debit)</label>
                                    <select name="description" id="description" class="form-control" v-model="formData.transaction_type">
                                        <option value="credit">Credit</option>
                                        <option value="debit">Debit</option>
                                    </select>
                                </div>
                                <br>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Amount</label>
                                    <input type="number" class="form-control" id="formGroupExampleInput" placeholder="Amount (E.g: 48.10)" step="0.01" v-model="formData.amount">
                                </div>
                                <br>
                                <div class="form-group">
                                    <label for="formGroupExampleInput">Bank Type</label>
                                    <select name="bankType" id="bankType" class="form-control" v-model="formData.bank">
                                        <option value="DBS">DBS</option>
                                        <option value="POSB">POSB</option>
                                        <option value="UOB">UOB</option>
                                        <option value="OCBC">OCBC</option>
                                        <option value="Citibank">Citibank</option>
                                        <option value="HSBC">HSBC</option>
                                        <option value="Others">Others</option>
                                    </select>
                                </div>
                                <br>
                                <div class="form-group">
                                    <label for="formGroupExampleInput3">Account</label>
                                    <select name="description" id="description" class="form-control" v-model="formData.accountid">
                                        <option value="account1">Account 1</option>
                                        <option value="account2">Account 2</option>
                                        <option value="account2">Account 3</option>
                                    </select>
                                </div>
                                <br>
                                </div>
                                    <button type="submit" class="btn btn-danger">Delete</button>
                                    </form>
                                </div>
                                
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                                </div>
                            </div>
                            </div>


                        <button type="button" class="btn btn-lg" data-bs-toggle="modal" data-bs-target="#mymodal">Add account</button>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <button type="button" class="btn btn-lg" data-bs-toggle="modal" data-bs-target="#deletemodal">Delete account</button>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <!-- <a href="/accounts/addRecord"><button type="button" class="btn btn-lg">Add record</button></a> -->
                        <button type="button" class="btn btn-lg" data-bs-toggle="modal" data-bs-target="#addrecord">Add record</button>
                        &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
                        <button type="button" class="btn btn-lg" data-bs-toggle="modal" data-bs-target="#deleterecord">Delete record</button>


                        </div>
                    </div>
                </div>

                <div>
                <router-view />
                </div>


        </body>
</template>

<script>
//importing bootstrap 5
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import axios from 'axios';

export default {
  name: 'addRecord',
  data() {
      return {
          formData: {
          accountid: '',
          transaction_type: '',
          amount: '',
          bank: '',
          category: '',
          date_time:'',
      },
      msg : ''
    };
  },
  methods: {
      addRecord() {
          const path = 'http://127.0.0.1:5000/account/add';
          axios.post(path, this.formData)
            .then((res) => {
            this.msg = res.data["message"];
            })
            .catch((error) => {
            console.error(error);
            this.msg = 'An error occurred while adding the record.';
          });
      },

      deleteRecord() {
        const path = 'http://127.0.0.1:5000/account/delete';
        const params = new URLSearchParams(this.formData).toString()
        axios.delete(`${path}?${params}`)
            .then((res) => {
            this.msg = res.data["message"];
            })
            .catch((error) => {
            console.error(error);
            this.msg = 'An error occurred while deleting the record.';
            });
      }
  },
}
</script>

<style scoped>
.modal_header{
    color:black;
}

.recordDelete{
    color:white;
}

.btn{
        color:white;
        font-weight: bold;
        border-color: white;
        width: 20%;
        flex-direction: row;
        flex-wrap: wrap;
        display:inline-block;
        font-size: large;
    }

    .btn:hover{
        background-color: white;
        color: black;
    }

    a {
        color:white;
        text-decoration: none;
    }

body {
    background-color: #0F4C75 !important;
    min-height: 100vh;
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

.nav-link:hover, 
.nav-link.router-link-active,
.nav-link.router-link-exact-active{
color:black;
background-color: white;
}


</style>