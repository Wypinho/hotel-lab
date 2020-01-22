<template lang="html">
<div id="bookingsGrid">
  <booking v-for="booking, index in bookings" :key="index" :booking="booking"/>
</div>

</template>

<script>
import { eventBus } from '../main';
import BookingService from '../services/BookingService';
import Booking from './Booking';

export default {
  name: "bookings-grid",
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'booking': Booking
  },

  mounted() {
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));

  },

  methods: {
    fetchData() {
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
