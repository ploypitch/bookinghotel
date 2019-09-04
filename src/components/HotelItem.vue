<template>
    <div class='hotelitem'>
        <li class='card' v-for="(post,index) in posts" :key="index">
            <div class='hotelname'>
                <h1>{{post.name}}</h1>
            </div>
            <div class='hotelpic' >
                <img id='pichotel' v-if="post" :load="console.log(post)" :src="post.picture[0]" >
            </div>
            <div class='city'>
                <h3>{{post.town}}</h3>
            </div>
            <div class='star' >
                <svg v-for="index in post.rating" :key="index" class="svg-icon" viewBox="0 0 20 20">
                        <path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
                </svg>
            </div>
            <div class='price'>
                <h2>{{post.price + ' THB'}}</h2>
            </div>
            <div>
                <button id='bookbtn'>BOOKING</button>
            </div>
        </li>
    </div>

</template>

<script>
import axios from 'axios';
export default {
  name: 'HotelItem',
  data() {
      return {
          posts: [],
          errors: [],
          star: []
      }
  },
  created() {
    axios.get(`https://6047bc7b-07f5-4d46-9a92-77f7d52a430f.mock.pstmn.io/hotelList`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
    })
    .catch(e => {
      this.errors.push(e)
    })
    this.console = window.console;
  }
}
</script>

<style >
    .hotelitem{
        display: flex;
        flex-wrap: wrap;
    }
    .card {
        background: #ffffff;;
        padding: 30px;
        width:250px;
        /* margin: 5em auto; */
        border-radius:2em;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
        margin-left: 0;
        margin-right: 2.5em;
        margin-bottom: 2.5em;
    }
    .hotelname {
        background: linear-gradient(to right, #6606BB 0%, #D40E70 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .hotelpic {
        text-align: center;
    }
    #pichotel {
        width: 250px;
        height: 190px;
    }
    #bookbtn {
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
    #bookbtn:hover{
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    }
    .svg-icon {
        width: 1em;
        height: 1em;
    }
    .svg-icon path {
        fill: #D40E70;
    }
</style>
