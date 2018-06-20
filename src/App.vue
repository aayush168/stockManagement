<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  watch: {
    isAuthenticated: function(val) {
      if (!val) {
        this.$router.push({
          name: 'Login'
        });
      } else {
        this.$router.push({
          name: 'Home'
        });
      }
    }
  }
}
</script>

<style>
.q-layout-header {
  box-shadow: none;
}
</style>
