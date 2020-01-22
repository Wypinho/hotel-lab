<template>
  <div id="app">
    <h1><i>Welcome to the... </i>HOTEL CALIFORNIA</h1>
    <bookings-form />
    <bookings-grid />
  </div>
</template>

<script>
import BookingsForm from './components/BookingsForm';
import BookingsGrid from './components/BookingsGrid';

export default {
  name: 'app',
  components: {
    'bookings-form': BookingsForm,
    'bookings-grid': BookingsGrid
  }
}
</script>

<style>
body {
  background: url('./assets/matthew-t-rader-RAUmhJRAq4c-unsplash.jpg') no-repeat;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  font-family: 'verdana';
}

h1 {
  text-align: center;
}

</style>
