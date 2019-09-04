<template>
  <div class="home">
    <div class='allhotel'>
            <h1>All Hotel</h1>
    </div>
    <HotelItem></HotelItem>
    <!-- <SignIn></SignIn>         -->
    <!-- for test modal -->
  </div>
</template>

<script>
// @ is an alias to /src

import HotelItem from '@/components/HotelItem'

export default {
  name: 'home',
  components: {
    HotelItem
  }

}
</script>

<style scoped>
  .home{
    margin-left: 15%;
    margin-right: 15%;
  }
  .allhotel {
    margin-top: 4em;
    padding: 16px;
    background: linear-gradient(to right, #6606BB 0%, #D40E70 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
