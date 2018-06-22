<template>
  <q-layout view="lHh Lpr lFf" class="container">
    <q-layout-header class="headerContainer">
      <Navigation/>
      <SToolbar/>
    </q-layout-header>
    <q-page-container>
      <router-view/>
    </q-page-container>  
  </q-layout>
</template>

<script>
import Navigation from 'components/Toolbar/Navigation'
import SToolbar from 'components/Toolbar/SToolbar'
import Dashboard from 'components/Dashboard'

export default {
  name: 'LayoutMain',
  data () {
    return {
    }
  },
  methods: {
  },
  components: {
    Navigation,
    SToolbar,
    Dashboard
  }
}
</script>

<style lang="stylus">
@import '~variables';

* {
  font-size: 14px;
}
.container {
  max-width: 1300px;
  width: 100%;
  margin: 0 auto;
  .headerContainer {
    width: 100%;
  }

}
</style>
