<script>
import { mapGetters } from 'vuex'

export default  {
  methods: {
  },
  //라이프 사이클 훅
  created() {
    this.$store.dispatch("FETCH_ASKS")
  },
  computed : {
    ...mapGetters([
      'fetchedAsk'
    ])
    // ...mapState({
    //   asks : state => state.asks
    // })
  },
  data() {
    return {
    }
  },
}
</script>
<template>
  <p v-for="(ask,index) in fetchedAsk" :key="index">
    <router-link :to="`item/${ask.id}`">
      {{ ask.title }}
    </router-link>
    <small> {{ ask.time_ago }} by {{ ask.user }}</small>
  </p>
</template>

<style scoped>

</style>
