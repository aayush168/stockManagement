<template>
    <div class="containerWrapper">
      <div class="headerDashboard">
      <q-card class="stockCards">
        <q-card-title>
          Monthly Report
        </q-card-title>
        
        <q-card-main>
          Card Content
        </q-card-main>
      </q-card>
      <q-card class="stockCards">
        <q-card-title>
          Card Title
        </q-card-title>
        
        <q-card-main>
          Card Content
        </q-card-main>
      </q-card>
      <q-card class="stockCards">
        <q-card-title>
          Card Title
        </q-card-title>
        
        <q-card-main>
          Card Content
        </q-card-main>
      </q-card>
      </div>
      <div class="mainDashboard">
        <q-card class="stockCardsMain">
        <q-card-title>
          Summary Report
        </q-card-title>
        
        <q-card-main>
          Card Content
        </q-card-main>
      </q-card>
      </div>
    </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>
.stockCards {
  max-width: 250px;
  width: 100%;
  display: inline-block;
  margin: 15px 15px 15px 0;
}
.stockCardsMain {
  max-width: 600px;
  width: 100%;
  display: inline-block;
  margin: 15px 15px 15px 0;
}
.containerWrapper {
  padding: 30px;
}
</style>
