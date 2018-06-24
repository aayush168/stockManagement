<template>
  <div >
    <q-list>
          <q-item class="itemList" @click.native="selectTab()" >
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label class="itemListName" >
                Add Clients
              </q-item-tile>
            </q-item-main>
          </q-item>
          <q-item class="itemList" link>
            <q-item-side icon="folder" inverted color="primary" />
            <q-item-main>
              <q-item-tile label class="itemListName">
                Client Lists
              </q-item-tile>
            </q-item-main>
          </q-item>
        </q-list>
  </div>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
    selectTab() {
      this.$emit('setClientTabs', 'addClients')
    }
  }
}
</script>

<style>
</style>
