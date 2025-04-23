<script>
import { mapGetters } from 'vuex'
import ListItem from "@/components/ListItem.vue";

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
  components : {
    ListItem,
  }
}
</script>
<template>
  <ListItem/>
</template>

<style scoped>

</style>
