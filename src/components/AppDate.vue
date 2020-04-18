<template>
  <span :title="timestamp | humanFriendlyDate">{{timestamp | diffForHumans}}</span>
</template>

<script>
  export default {
    name: 'AppDate',
    props: {
      timestamp: {
        required: true,
        type: Number
      }
    }
  }
</script>

<style scoped>

</style>
