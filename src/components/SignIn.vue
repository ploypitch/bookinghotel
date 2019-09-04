<template>
    <div class='modal' v-show='showSign'>
        <div class='signform'>
            <button id='closemodal' @click='closeSign'>X</button><br>
            <ul class="tabs">
                <li class='tab-active' id="tab1" @click='showRegist'><h2>Register</h2></li>
                <li id="tab2" @click='showSign'><h2>Sign In</h2></li>
            </ul>

            <div class="content">
                <div id="Register" v-show='regist'>   
                    <div class="top-row">
                        <div class="inputbox">
                            <label>First Name :</label>
                            <input type="text"/>
                        </div>
                        <div class="inputbox">
                            <label>Last Name :</label>
                            <input type="text">
                        </div>
                    </div>
                    
                    <div class="inputbox">
                        <label>Username :</label>
                        <input type="text">
                    </div>

                    <div class="inputbox">
                        <label>Email Address :</label>
                        <input type="email">
                    </div>
                
                    <div class="inputbox">
                        <label>Password :</label>
                        <input type="password">
                    </div>

                    <div class="inputbox">
                        <label>Confirm-Password :</label>
                        <input type="password">
                    </div>

                    <div class="inputbox">
                        <label>Birthday :</label>
                        <input type="date">
                    </div>
                    <button id='btn'>CONFIRM</button>
                </div>
                
                <div id="login" v-show='!regist'>   
                    <div class="inputbox">
                        <label>Username :</label>
                        <input type="text">
                    </div>

                    <div class="inputbox">
                        <label>Password :</label>
                        <input type="password">
                    </div>                   
                    <button id='btn'>SIGN IN</button>
                </div>   

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignIn',
    data() {
        return {
            regist: true,
            showSign: true
        }
    },
    methods: {
        showRegist(){
            this.regist = true;
            var element = document.getElementById("tab1");
            var element2 = document.getElementById("tab2");
            element.classList.add("tab-active");
            element2.classList.remove("tab-active");
        },
        showSign() {
            this.regist = false;
            var element = document.getElementById("tab2");
            var element2 = document.getElementById("tab1");
            element.classList.add("tab-active");
            element2.classList.remove("tab-active");
        },
        closeSign() {
            this.showSign = false
        }
    }
  
}
</script>

<style scoped>
    .modal{ 
        position: fixed; /* Stay in place */
        z-index: 1; /* Sit on top */
        left: 0;
        top: 0;
        width: 100%; /* Full width */
        height: 100%; /* Full height */
        overflow: auto; /* Enable scroll if needed */
        /* background-color: rgb(0,0,0); Fallback color */
        background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
        padding-top: 60px;
    }
    .signform{
        background: #ffffff;;
        padding: 30px;
        max-width:500px;
        margin: 5em auto;
        border-radius:2em;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }
    #closemodal{
        background: #ffffff;
        border: none;
        font-size: 20px;
        color: #6606BB;
        cursor: pointer;
        float: right;
    }
    #closemodal:hover{
        color: #D40E70;
    }
    .tabs{
        list-style:none;
        padding:0;
        display:flex;
    }
    li {
        text-decoration:none;
        background:rgba(0, 0, 0, 0.1);
        color:#413e3e;
        font-size:14px;
        width:50%;
        text-align:center;
        cursor:pointer;
        transition:.5s ease;
    }
    .tab-active {
        background: linear-gradient(to right, #6606BB 0%, #D40E70 100%);
        opacity: 0.7;
        color: #ffffff;
    }
    label {
        left:13px;
        pointer-events: none;
        font-size:18px;
    }
    .top-row{
        display: flex;
        clear: both;
    }
    input{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: 1px solid #ccc;
        box-sizing: border-box;
    }
    #btn {
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        display: inline-block;
        border: none;
        box-sizing: border-box;
        background: linear-gradient(to right, #6606BB 0%, #D40E70 100%);
        color: #ffffff;
        opacity: 0.7; 
        cursor: pointer;
        font-size: 18px;
    }
    #btn:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    
</style>
