<template>
  <q-page>
    <div class="clientsWrapper">
        <client-tabs @setClientTabs="tabSelected" v-if="selectedTab === ''"/>
        <add-clients v-if="selectedTab === 'addClients'"/>
        <client-lists v-if="selectedTab === 'clientLists'"/>
    </div>
  </q-page>
</template>

<script>
import ClientTabs from 'components/Clients/ClientTabs'
import AddClients from 'components/Clients/AddClients'
import ClientLists from 'components/Clients/ClientLists'

export default {
  data () {
    return {
      selectedTab: '',
    }
  },
  methods: {
    tabSelected(data) {
      this.selectedTab = data
    }
  },
  components: {
    ClientTabs,
    AddClients,
    ClientLists
  }
}
</script>

<style lang="stylus">
@import '~variables';

.clientsWrapper {
  padding: 20px 0;
  .itemList {
    margin-bottom: 10px;
    cursor: pointer;
    .itemListName {
      font-weight: bold;
      color: $color-grey;
    }
  }
}
</style>
