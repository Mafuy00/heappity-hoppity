<template>
<body>
    <div class="topnav">
        <div>
            <img id="logo" src="/img/icons8-bank-building-100.png" alt="Bank Building Image"> 
                    
        </div>
        <p id="companyName">GuidedCents</p>
    </div>
    <br>
    <div class="container">
        <div class="card">
            <div class="card-body">
                <h2>Add New Record</h2>
                <br>
                <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Date (DD/MM/YYYY)</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Date (DD/MM/YYYY)">
                </div>
                <br>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Category</label>
                    <!-- <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Category"> -->
                    <br>
                    <select name="category" id="category" class="form-control">
                        <option value="food">Food</option>
                        <option value="transport">Transport</option>
                        <option value="entertainment">Entertainment</option>
                        <option value="personalCare">Personal Care</option>
                        <option value="medical">Medical Expenses</option>
                        <option value="travel">Travel</option>
                        <option value="gifts">Gifts & Donations</option>
                        <option value="social">Social Activities</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <br>
                <div class="form-group">
                    <label for="formGroupExampleInput3">Description (Credit/Debit)</label>
                    <select name="description" id="description" class="form-control">
                        <option value="credit">Credit</option>
                        <option value="debit">Debit</option>
                    </select>
                </div>
                <br>
                <div class="form-group">
                    <label for="formGroupExampleInput">Amount</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Amount (E.g: 48.10)">
                </div>
                <br>
                <div class="form-group">
                    <label for="formGroupExampleInput">Bank Type</label>
                    <select name="bankType" id="bankType" class="form-control">
                        <option value="dbs">DBS</option>
                        <option value="posb">POSB</option>
                        <option value="uob">UOB</option>
                        <option value="ocbc">OCBC</option>
                        <option value="citibank">Citibank</option>
                        <option value="hsbc">HSBC</option>
                        <option value="bankOthers">Others</option>
                    </select>
                </div>
                <br>
                <div class="form-group">
                    <label for="formGroupExampleInput3">Account</label>
                    <select name="description" id="description" class="form-control">
                        <option value="account1">Account 1</option>
                        <option value="account2">Account 2</option>
                        <option value="account2">Account 3</option>
                    </select>
                </div>
                <br>
                <a href="/accounts/account1"><button type="button" class="btn btn-lg">Add record</button></a>
                </form>
            </div>
        </div>
    </div>
</body>


</template>

<style scoped>

a {
        color:white;
        text-decoration: none;
    }

body {
    background-color: #0F4C75 !important;
    min-height: 100vh;
}

#logo {
    width: 60px;
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

.topnav {
    background-color: #0F4C75;
    /* overflow: hidden; */
    margin: 0;
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    
}

.btn{
        color:white;
        font-weight: bold;
        border-color: white;
        width: 100%;
        flex-direction: row;
        flex-wrap: wrap;
        display:inline-block;
        background-color: #0F4C75;
    }

.btn:hover{
    background-color: white;
    color: black;
    border-color: #0F4C75;
}
</style>