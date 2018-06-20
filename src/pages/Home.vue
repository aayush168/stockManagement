<template>
  <div>
    <Navigation/>
    <SToolbar/>
    <Dashboard/>
  </div>
</template>

<style>
</style>

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
