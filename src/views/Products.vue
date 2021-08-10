<template>
  <div>
    123
  </div>
</template>

<script>
import axios from 'axios'

export default {
  created () {
    console.log(this.$route.params.id)
    const seed = 'c585c20debad18df'
    axios
      .get(`https://randomuser.me/api/?seed=${seed}`)
      .then((res) => {
        console.log(res)
      })
  }
}
</script>
