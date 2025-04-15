<script>
import { fetchAskList } from "@/api";

export default  {

  data() {
    return {
      asks : []
    }
  },
  //라이프 사이클 훅
  created() {
    fetchAskList()
      .then(response => this.asks = response.data)
      .catch()
  },
}
</script>
<template>
<div>
  <div v-for="ask in asks">{{ ask.title }}</div>
</div>
</template>

<style scoped>

</style>
