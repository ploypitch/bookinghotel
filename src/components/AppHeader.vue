<template>
    <div>
        <div class='appheader'>
            <div class='container'>
                <button id='main'><router-link to="/">BOOKING-HOTEL</router-link></button>
                <button class='rightmenu' id='signin' @click='showSignIn'>Sign In</button>
                <button class='rightmenu' id='hotel'><router-link to="/avahotel">AVAILABLE HOTEL</router-link></button>
            </div>
        </div>
        <div class='modal' v-show='showSignin'>
            <div class='signform'>
                <div class='topsign'>
                    <label id='alerttxt'>{{checkUser}}</label>
                    <button id='closemodal' @click='closeSign'>X</button><br>
                </div>
                <ul class="tabs">
                    <li class='tab-active' id="tab1" @click='showRegist'><h2>Register</h2></li>
                    <li id="tab2" @click='showSign'><h2>Sign In</h2></li>
                </ul>

                <div class="content">
                    <div id="Register" v-show='regist'>   
                        <div class="top-row">
                            <div class="inputbox">
                                <label>First Name :</label>
                                <input type="text" v-model='firstname'/>
                            </div>
                            <div class="inputbox">
                                <label>Last Name :</label>
                                <input type="text" v-model="lastname"/>
                            </div>
                        </div>
                        
                        <div class="inputbox">
                            <label>Username :</label>
                            <input type="text" v-model="username">
                        </div>

                        <div class="inputbox">
                            <label>Email Address :</label>
                            <input type="email" v-model="email" :rules="[validateEmail]">
                        </div>
                    
                        <div class="inputbox">
                            <label>Password :</label>
                            <input type="password" v-model="password">
                        </div>

                        <div class="inputbox">
                            <label>Confirm-Password :</label>
                            <input type="password" v-model="confirmPass" :rules="[comparePasswords]"/>
                        </div>

                        <div class="inputbox">
                            <label>Birthday :</label>
                            <input type="date" v-model="birthday">
                        </div>
                        <button id='btn' type='submit' @click='userSignUp'>CONFIRM</button>
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
    </div>
</template>

<script>
import SignIn from '@/components/SignIn'

export default {
  name: 'AppHeader',
  components: {
      SignIn
  },
  data(){
      return {
          regist: true,
          showSignin: false,
          firstname: '',
          lastname: '',
          username: '',
          email: '',
          password: '',
          confirmPass: '',
          birthday: '',
          checkUser: null,
          existEmail: 'john@doe.com'
      }
  },
  computed: {
    comparePasswords () {
        if(this.confirmPass !== this.password){
            this.checkUser = '**Password and confirm password don\'t match**'
        }
        else {
            this.checkUser =null
        }
    },
    validateEmail (){
        if(this.email === this.existEmail){
            this.checkUser ='**This email is already in use**'
        }
        else {
            this.checkUser =null
        }
    }
  },
  methods: {
        showSignIn(){
            this.showSignin = true;
        },
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
            this.showSignin = false
        },
        userSignUp () {
            if(this.checkUser===null){
                this.regist = false
                this.showSignin = true
                this.checkUser = 'Complete! You can sign in..'
                var element = document.getElementById("tab2");
                var element2 = document.getElementById("tab1");
                element.classList.add("tab-active");
                element2.classList.remove("tab-active");
            }           
        }
  }
}
</script>

<style>
    .appheader{
        background-color: white;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        height: 70px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
    }
    #main {
        background: linear-gradient(to right, #6606BB 0%, #D40E70 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 24px;
        border: none;
        border-radius: 2em;
        margin-right: 2em;
        padding: 10px 20px;
    }
    .container{
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 0.8em;
    }
    .rightmenu {
        float: right;
    }
    #hotel {
        background: linear-gradient(to right, #6606BB 0%, #D40E70 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        font-size: 20px;
        border: none;
        border-radius: 2em;
        margin-right: 2em;
        padding: 10px 20px;
    }
    #hotel:hover {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);

    }
    #signin {
        background: linear-gradient(to right, #6606BB 0%, #D40E70 100%);
        border: none;
        border-radius: 2em;
        color: #ffffff;
        font-size: 20px;
        padding: 10px 20px;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        cursor: pointer;
    }
    #signin:hover{
        opacity: 0.7;
    }
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
    #alerttxt {
        color: red;
    }
</style>
