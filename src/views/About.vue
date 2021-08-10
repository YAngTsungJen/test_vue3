<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button type="button" class="btn btn-primary" @click="go">
      用go返回頁面
    </button>
    <Card></Card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
export default {
  components: {
    Card
  },
  methods: {
    go () {
      this.$router.go(-1)
    }
  }
}
</script>
