<template>
  <div>
    <button type="button" class="btn btn-primary" @click="getRouter">
      取得方法
    </button>
    <button type="button" class="btn btn-primary" @click="push">
      到about頁面
    </button>
    <button type="button" class="btn btn-primary" @click="replace">
      用replace到about頁面
    </button>
    <button type="button" class="btn btn-primary" @click="addRoute">
      用addRoute增加頁面
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    getRouter () {
      console.log(this.$route)
      console.log(this.$router)
    },
    push () {
      this.$router.push({
        name: 'About'
      })
    },
    replace () {
      this.$router.replace({
        name: 'About'
      })
    },
    addRoute () {
      this.$router.addRoute(
        {
          path: '/newuseMethods',
          name: 'NewUseMethods',
          component: () => import('../views/UseMethods.vue')
        }
      )
    }
  }
}
</script>
