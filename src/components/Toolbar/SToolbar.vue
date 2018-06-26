<template>
  <q-layout class="secondaryToolbar">
    <ul class="tabLinks">
      <router-link tag="li" to="/"><q-icon name="fas fa-home" /></router-link>
      <router-link tag="li" to="/addInvoice"><q-icon name="fas fa-clipboard" /></router-link>
      <router-link tag="li" to="/reports"><q-icon name="fas fa-dollar-sign" /></router-link>
      <router-link tag="li" to="/products"><q-icon name="fas fa-shopping-cart" /></router-link>
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
    background-color: #0B0E11;
    .tabLinks {
      color: #fff;
      li {
        display: block;
        text-align: center;
        padding: 20px 0;
        i {
          font-size: 1.5rem;
        }
      }
    }
}
</style>
