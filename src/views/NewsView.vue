
<script>
import { fetchNewsList } from '@/api'

export default {
  data() {
    return {
      newses : []
    }
  },
  created() {

    //var vm = this;
    //vm.usrs = response.data
    fetchNewsList()
      .then(response => this.newses = response.data)
      .catch()
  }
}
</script>

<template>
  <div v-for="news in newses">{{ news.title }}</div>
</template>

<style>

</style>
