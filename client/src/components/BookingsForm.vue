<template lang="html">
  <form id="bookings-form" method="post" v-on:submit="handleSubmit">
    <h2>Add a booking</h2>
    <div class="formWrap">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">
    </div>
    <div class="formWrap">
      <label for="email">email:</label>
      <input type="text" id="email" v-model="email">
    </div>
    <div class="formWrap">
      <label for="status">Status:</label>
      <select id="status" v-model="status">
        <option disabled value="">Select status...</option>
        <option v-for="status in statuses" :value="status">{{ status }}</option>
      </select>
    </div>
    <input type="submit" value="Add Booking!" id="save">
  </form>
</template>

<script>
import {eventBus} from '../main';
import BookingService from '../services/BookingService';

export default {
  name: "bookings-form",
  data() {
    return {
      name: "",
      email: "",
      status: "",
      statuses: [ "Pending", "Checked-In" ]
    }
  },
  methods: {
    handleSubmit(evt) {
      evt.preventDefault();

      const payload = {
        name: this.name,
        email: this.email,
        status: this.status
      };

      BookingService.postBooking(payload)
        .then(booking => {
          eventBus.$emit('booking-added', booking)
        });

      this.name = this.email = this.status = "";
    }
  }
}
</script>

<style lang="css" scoped>

h2 {
	margin: 10px 0;
	padding: 0;
}
form {
	width: 75%;
	margin: 0 auto;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;

}
form div {
  display: inline-block;
}
form input {
  margin: 0px 10px;
}
label {
	min-width: 100px;
	display: inline-block;
}
.formWrap {
	margin-bottom: 10px;
}

</style>
