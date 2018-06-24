<template>
  <q-layout class="secondaryToolbar">
    <ul class="tabLinks">
    </ul>
  </q-layout>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    addClients() {
      this.$router.push({
        name: 'AddClients'
      });
    }
  }
}
</script>

<style lang="stylus">
@import '~variables';

.secondaryToolbar {
    background-color: $secondary-dark;
    .tabLinks {
      margin: 0;
    }
}
</style>
