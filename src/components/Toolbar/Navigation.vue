<template>
  <div>
    <q-toolbar color="white" text-color="faded" class="navigationToolbar">
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

<style>
.navigationToolbar {
  padding: 20px 30px 20px 20px;
}
.q-toolbar-title {
  color: #666;
  font-size: 1.25rem;
}
.user {
  margin:0 10px;
  cursor: pointer;
}
</style>
