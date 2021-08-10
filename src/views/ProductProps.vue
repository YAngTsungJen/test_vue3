<template>
  <div>
    456
  </div>
</template>

<script>
import axios from 'axios'

export default {
  props: ['id'],
  created () {
    // console.log(this.$route.params.id)
    const seed = this.id
    axios
      .get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res)
      })
  }
}
</script>
