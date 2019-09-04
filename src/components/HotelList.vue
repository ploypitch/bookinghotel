<template>
    <div class='hotellist'>
        <HotelItem></HotelItem>
    </div>
</template>

<script>
import HotelItem from '@/components/HotelItem'

export default {
  name: 'HotelList',
  components: {
      HotelItem
  }
}
</script>

<style>
    .hotellist {
        margin-top: 7em;
        margin-left: 15%;
        margin-right: 15%;
    }
</style>
