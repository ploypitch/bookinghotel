<template>
    <div class='hotelinfo'>
        <div class='toptitle'>
            <div class='hotelname'>
                <h1>{{posts[0].name}}</h1>
            </div>
        </div>
        <div class='sectitle'>
            <div class='city'>
                {{posts[0].town + ', '}} 
            </div>
            <div class='star' v-for="index in star" :key="index" >
                <svg class="svg-icon" viewBox="0 0 20 20">
					<path d="M17.684,7.925l-5.131-0.67L10.329,2.57c-0.131-0.275-0.527-0.275-0.658,0L7.447,7.255l-5.131,0.67C2.014,7.964,1.892,8.333,2.113,8.54l3.76,3.568L4.924,17.21c-0.056,0.297,0.261,0.525,0.533,0.379L10,15.109l4.543,2.479c0.273,0.153,0.587-0.089,0.533-0.379l-0.949-5.103l3.76-3.568C18.108,8.333,17.986,7.964,17.684,7.925 M13.481,11.723c-0.089,0.083-0.129,0.205-0.105,0.324l0.848,4.547l-4.047-2.208c-0.055-0.03-0.116-0.045-0.176-0.045s-0.122,0.015-0.176,0.045l-4.047,2.208l0.847-4.547c0.023-0.119-0.016-0.241-0.105-0.324L3.162,8.54L7.74,7.941c0.124-0.016,0.229-0.093,0.282-0.203L10,3.568l1.978,4.17c0.053,0.11,0.158,0.187,0.282,0.203l4.578,0.598L13.481,11.723z"></path>
				</svg>
            </div>
            
        </div>
        <div class='picmap'>
            <div class='hotelpic2'>
                <img id='imghotel' :src='imgurl'>
            </div>
            <div class="mapouter">
                <div class="gmap_canvas">
                    <iframe width="300" height="300" id="gmap_canvas" :src='mapurl' frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                </div>
            </div>
        </div>
        <br>
        <div class='bottom'>
            <div class='facility'>
                <h3>facilities</h3>
                <ul>
                    <li id='facility'>{{posts[0].facility[0]}}</li>
                </ul>
            </div>
            <div class='btmright'>
                <div class='price'><h2>{{posts[0].price + ' THB'}}</h2></div>
                <div><button id='bookbtn'>BOOKING</button></div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HotelInfo',
  data() {
    return {
      posts: [],
      errors: [],
      imgurl: [],
      star: [],
      mapurl: []
    }
  },
  created() {
    axios.get(`https://6047bc7b-07f5-4d46-9a92-77f7d52a430f.mock.pstmn.io/hotelList`)
    .then(response => {
      // JSON responses are automatically parsed.
      this.posts = response.data
      this.imgurl = response.data[0].picture[0]
      this.mapurl = response.data[0].map
      this.star = response.data[0].rating
      console.log(response.data[0].picture[0])
    })
    .catch(e => {
      this.errors.push(e)
    })
  }
}
</script>

<style scoped>
    .hotelinfo {
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 7em;
        padding: 16px;
    }
    .toptitle {
        display: flex;
    }
    .sectitle {
        display:flex;
    }
    .svg-icon {
        width: 1em;
        height: 1em;
    }
    .svg-icon path {
        fill: #D40E70;
    }
    .mapouter {
        text-align:right;
        height:300px;
        width:300px;
    }
    .gmap_canvas {
        overflow:hidden;
        background:none!important;
        height:300px;
        width:300px;
    }
    .picmap {
        display: flex;
    }
    .hotelpic2 {
        width: 720px;
        text-align: left;
    }
    #imghotel {
        width: 700px;
        height: 300px;
    }
    .facility {
        width: 720px;
    }
    .bottom {
        display: flex;
    }
    .btmright {
        margin-right: 0;
    }
    #facility {
        list-style: none;
        background: white;
        color: #D40E70;
    }
</style>
