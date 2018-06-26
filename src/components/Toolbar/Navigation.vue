<template>
  <div>
    <q-toolbar class="navigationToolbar">
      <q-toolbar-title>
        Dashboard
      </q-toolbar-title>
      <q-icon name="person" size="1.5rem" @click.native="logout" class="user"/>
    </q-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    ...mapActions(['logout'])
  }
}
</script>

<style lang="stylus">
@import '~variables';

.navigationToolbar {
  padding: 20px;
  background-color: #fff !important;
  color: $color-grey !important;
  box-shadow: 1px 1px 1px #ddd !important;
}
.q-toolbar-title {
  font-size: 1.25rem;
}
.user {
  cursor: pointer;
}
</style>
