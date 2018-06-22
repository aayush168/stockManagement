<template>
  <q-page>
    <div class="AddClientsWrapper">
      <p class="labelTitle">Add Clients</p>
      <form action="">
        <custom-input v-model='form.fullName' :formData='form' name='fullName' :handler='$v' float-label='Full Name' class="inputLogin">
        </custom-input>
        <custom-input v-model='form.contactNo' :formData='form' name='contactNo' :handler='$v' float-label='Contact No' class="inputLogin">
        </custom-input>
        <q-btn label="Add" class="btn" @click="addClients()" />
        
      </form>
    </div>
  </q-page>
</template>

<script>
import CustomInput from 'components/CustomInput'
import { required, numeric } from 'vuelidate/lib/validators'
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      form: {
        fullName: '',
        contactNo: '',
        errorMessages: {
          fullName: {
            required: 'Please, enter your name',
          },
          contactNo: {
            required: 'Please, enter your contact number'
          }
        }
      }
    }
  },
  validations: {
    form: {
      fullName: {
        required
      },
      contactNo: {
        required,
        numeric
      }
    }
  },
  components: {
    CustomInput
  },
  methods: {
    addClients() {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        console.log('errors')
      } else {
        
      }
    }
  }
}
</script>

<style lang="stylus">
@import '~variables';

.AddClientsWrapper {
  .labelTitle {
    font-size: 1.25rem;
    color: $primary;
    font-weight: bold;
  }
  .inputLogin {
    margin-bottom: 15px;
    max-width: 400px;
  }
  .btn {
    max-width: 250px;
    width: 100%;
    padding: 15px;
    margin-top: 30px;
  }
}
</style>
