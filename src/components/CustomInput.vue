<template>
  <div>
    <q-field>
      <q-input
        :float-label="floatLabel"
        :value="model"
        @input="input()"
        v-model="state"
        :error="formHandle.$error"
        :type="type"
        :disable= "disable"
        :after="[iconData]"
      />
      <div class="error-container" v-if="formHandle.$error">
        <span class="error" v-for="error in errors" :key="error">* {{errorMessage[error]}}</span>
      </div>
    </q-field>
  </div>
</template>

<script>
export default {
  data () {
    return {
      state: '',
      iconData: {
        icon: ''
      }
    }
  },
  props: [
    'model',
    'type',
    'name',
    'handler',
    'formData',
    'floatLabel',
    'disable',
    'icon'
  ],
  model: {
    prop: 'model',
    event: 'updateModel'
  },
  created () {
    this.state = this.model
    this.iconData.icon = this.icon
  },
  methods: {
    input () {
      this.$emit('updateModel', this.state)
      this.$emit('change')
    }
  },
  watch: {
    'model': function () {
      this.state = this.model
    }
  },
  computed: {
    errors: function () {
      return Object.getOwnPropertyNames(this.formHandle).filter(x => {
        return this.formHandle[x] === false && x[0] !== '$'
      })
    },
    formHandle: function () {
      let data = this.name.split('.').reduce((acc, curr) => {
        return acc[curr]
      }, this.handler.form)
      return data
    },
    errorMessage: function () {
      console.log(this.formData.errorMessages)
      let data = this.name.split('.').reduce((acc, curr) => {
        return acc[curr]
      }, this.formData.errorMessages)
      return data
    }
  }
}
</script>

<style scoped>
.error-container {
  text-align: right;
  color: #db2828;
  font-size: .8rem;
}
.error {
  display: block;
  width: 100%;
  margin-top: 5px;
}
</style>
