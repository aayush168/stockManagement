<template>
    <div class="containerWrapper">
      <div class="mainDashboard">
        <q-card class="stockCardsMain">
          <q-card-title>
          </q-card-title>
          <q-card-main>
          </q-card-main>
        </q-card>
      </div>
      <div class="rightDashboard">
        <div class="rightTopBashBoard">
          <q-card class="stockCardTop">
            <q-card-title>
            </q-card-title>
            <q-card-main>
            </q-card-main>
          </q-card>
        </div>
        <div class="bottomRightDashboard">
          <q-card class="stockCardBottom">
            <q-card-title>
            </q-card-title>
            <q-card-main>
            </q-card-main>
          </q-card>
        </div>
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
  padding: 20px;
  .mainDashboard {
    width: 30%;
    padding: 0 2.5px 0 5px;
  }
  .rightDashboard {
    width: 70%;
    padding: 0 5px 0 2.5px;
    .rightTopBashBoard {
      margin-bottom: 2.5px;
      
    }
  }
}

</style>
