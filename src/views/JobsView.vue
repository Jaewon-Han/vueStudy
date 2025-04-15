
<script>
import {fetchJobsList} from "@/api";

export default {
  data() {
   return {
     jobs: []
   }
  },
  created() {
    fetchJobsList()
      .then(response => this.jobs = response.data)
      .catch()
  }
}

</script>

<template>
<div>
  <div v-for="(job, index) in jobs" :key="index">{{ job.title }}</div>
</div>
</template>

<style scoped>


</style>
