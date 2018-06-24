<template>
  <q-layout class="secondaryToolbar">
    <ul class="tabLinks">
      <router-link></router-link>
      <router-link></router-link>
      <router-link></router-link>
      <router-link></router-link>
      <router-link></router-link>
    </ul>
  </q-layout>
  <!-- <div>

    <q-toolbar color="white" text-color="faded">
      <div class="secondaryToolbar">
        <ul class="sLinks">
          <router-link tag="li" to="/" class="lists">
            <q-icon name="person_outline" size="1.5rem"/> DashBoard
          </router-link>
          <router-link tag="li" to="/addInvoice" class="lists">
            Add Invoive 
          </router-link>
          <router-link tag="li" to="/clients" class="lists">
            Clients
          </router-link>
          <router-link tag="li" to="/reports" class="lists">
            <q-icon name="library_books" size="1.5rem"/>
            Vendors
          </router-link>
          <router-link tag="li" to="/reports" class="lists">
            <q-icon name="library_books" size="1.5rem"/>
            Reports
          </router-link>
          <router-link tag="li" to="/reports" class="lists">
            <q-icon name="library_books" size="1.5rem"/>
            Chart of Accounts
          </router-link>
        </ul>
      </div>
    </q-toolbar>
  </div> -->
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
