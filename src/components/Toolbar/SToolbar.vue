<template>
  <div>
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
  </div>
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
  width: 100%;
  max-width: 1300px;
  margin: 0 auto;
  .sLinks {
    display: flex;
    list-style-type: none;
    padding-left:0;
    .lists {
      padding: 0 20px;
      font-size: 1.2rem;
      cursor: pointer;      
      &:first-child {
        padding-left: 0;
      }
      i {
        vertical-align: bottom;
        margin-right: 5px;
      }
    }
  }
}
</style>
