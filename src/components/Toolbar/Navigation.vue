<template>
  <div>
    <q-toolbar class="navigationToolbar">
      <q-toolbar-title>
        Dashboard
      </q-toolbar-title>
      <q-icon name="person" size="1.5rem"/>
      <span class="user" @click="openDropdown">{{username}}</span>
    </q-toolbar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['username'])
  },
  methods: {
    openDropdown() {
      
    }
  }
}
</script>

<style lang="stylus">
@import '~variables';

.navigationToolbar {
  padding: 15px;
  background-color: $primaryBlue !important;
}
.q-toolbar-title {
  font-size: 1.25rem;
}
.user {
  margin:0 10px;
  cursor: pointer;
}
</style>
