<template lang="html">
    <div class="booking">
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>
      <p>{{ booking.status }}</p>

      <button v-on:click="handleDelete(booking._id)">Cancel Booking</button>
    </div>
</template>

<script>
import BookingService from '../services/BookingService';
import {eventBus} from '../main';

export default {
  name: "booking",
  props: ['booking'],
  methods: {
    handleDelete(id) {
      BookingService.deleteBooking(id)
        .then(response => eventBus.$emit('booking-deleted', id));
    }
  }
}
</script>

<style lang="css" scoped>

.booking {
	width: 30%;
	background: rgba(255, 255, 255, 0.7);
	margin-bottom: 20px;
	padding: 25px;
}
button {
	color: #fff;
	border: none;
	font-size: 18px;
	padding: 10px;
	margin-top: 10px;
	background: #1c1a6c;
}
button:hover {
  color: #1c1a6c;
  background: #fff;
}
h2 {
	padding: 0;
	margin: 0;
}

</style>
