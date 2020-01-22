<template lang="html">
    <div class="booking">
      <h2>{{ booking.name }}</h2>
      <p>{{ booking.email }}</p>
      <p>{{ booking.status }}</p>
    </div>
</template>

<script>
export default {
  name: "booking",
  props: ['booking']
}
</script>

<style lang="css" scoped>
</style>
