<template>
    <div class='avahotel'>
        <div class='titleava'>
            <h1>Available Hotel</h1>
        </div>
        <HotelItem></HotelItem>
    </div>
</template>

<script>
import HotelItem from '@/components/HotelItem'
export default {
    name: 'AvaHotel',
    components: {
        HotelItem
    }
}
</script>

<style>
    .avahotel{
    margin-left: 15%;
    margin-right: 15%;
   }
   .titleava {
    margin-top: 4em;
    padding: 16px;
    background: linear-gradient(to right, #6606BB 0%, #D40E70 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
   }
</style>