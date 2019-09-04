<template>
    <div class='mybooking'>
        <div class='mytitle'>
            <h1>My Booking</h1>
        </div>
        <MyBookingItem></MyBookingItem>
    </div>
</template>

<script>
import MyBookingItem from '@/components/MyBookingItem'
export default {
  name: 'MyBooking',
  components: {
      MyBookingItem
  }
}
</script>

<style>
    .mybooking {
        margin-left: 15%;
        margin-right: 15%;
        margin-top: 4em;
        padding: 16px;
    }
    .mytitle {
        background: linear-gradient(to right, #6606BB 0%, #D40E70 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
</style>
