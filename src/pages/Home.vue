<template>
  <q-page>
    <Dashboard/>
  </q-page>
</template>

<script>
import Navigation from 'components/Toolbar/Navigation'
import SToolbar from 'components/Toolbar/SToolbar'
import Dashboard from 'components/Dashboard'

export default {
  components: {
    Navigation,
    SToolbar,
    Dashboard
  }
}
</script>

<style lang="stylus">
@import '~variables';

</style>
