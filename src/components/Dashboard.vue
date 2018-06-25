<template>
    <div class="containerWrapper">
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
      <div class="rightDashboard">
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

<style lang="stylus" scoped>
@import '~variables';

.containerWrapper {
  display: flex;
  width: 100%;
  padding: 30px 0;
  .mainDashboard {
    width: 30%;
    padding: 0 15px 0 30px;
  }
  .rightDashboard {
    width: 70%;
    padding: 0 30px 0 15px;
  }
}

</style>
