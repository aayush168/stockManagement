<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['isLoggedIn'])
  },
  methods: {
    ...mapActions(['checkUserLoginStatus'])
  },
  created() {
    this.checkUserLoginStatus()
  }
}
</script>

<style>
.q-layout-header {
  box-shadow: none;
}
.q-list {
  border: none;
}
</style>
