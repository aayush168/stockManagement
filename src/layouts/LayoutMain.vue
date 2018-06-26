<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="container">
      <div class="leftSidebar">
        <SToolbar/>
      </div>
      <div class="rightSidebar">
        <Navigation/>
        <router-view/>
      </div>
    </q-page-container>  
  </q-layout>
</template>

<script>
import Navigation from 'components/Toolbar/Navigation'
import SToolbar from 'components/Toolbar/SToolbar'

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
    SToolbar
  }
}
</script>

<style lang="stylus">
@import '~variables';

* {
  font-size: 14px;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  position: relative;
  width: 100%;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  .leftSidebar{
    width: 60px;
    min-width: 60px;
  }
  .rightSidebar {
    width: 100%;
  }
}
</style>
