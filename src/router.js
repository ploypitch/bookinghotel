import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HotelList from './components/HotelList.vue'
import SignIn from './components/SignIn.vue'
import HotelInfo from './components/HotelInfo.vue'
import MyBooking from './components/MyBooking.vue'
import AvaHotel from './components/AvaHotel.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/hotellist',
      name: 'HotelList',
      component: HotelList
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/hotelinfo',
      name: 'HotelInfo',
      component: HotelInfo
    },
    {
      path: '/mybooking',
      name: 'MyBooking',
      component: MyBooking
    },
    {
      path: '/avahotel',
      name: 'AvaHotel',
      component: AvaHotel
    }
  ]
})
