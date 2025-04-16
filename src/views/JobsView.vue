
<script>

export default {
  data() {
   return {
     jobs: []
   }
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}

</script>

<template>
  <p v-for="(job, index) in this.$store.state.jobs" :key="index">
    <a :href="job.url"> {{ job.title }}</a>
    <small> {{ job.time_ago }} by {{ job.domain }}</small>
  </p>
</template>

<style scoped>


</style>
