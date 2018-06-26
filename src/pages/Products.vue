<template>
  <div class="containerWrapper">
    <q-card class="stockCardsMain">
      <q-card-title>
        Products
      </q-card-title>
      <q-card-main>
        <form @submit.prevent="$v.touch()"  class="formWrapper">
          <p>Name</p>
          <custom-input v-model='form.productName' :formData='form' :handler='$v' name='productName' class="inputArea">
          </custom-input>
          <p>Price</p>
          <custom-input v-model='form.productPrice' :formData='form' :handler='$v' name='productPrice' type='text' class="inputArea">
          </custom-input>
          <p>Description</p>    
          <textarea v-model="productDescription" class="inputArea textArea"></textarea><br>
          <q-btn label="Add Products" class="loginBtn" @click="addProducts()" :loading="loginLoader"/>          
        </form>
      </q-card-main>
    </q-card>
  </div>
</template>

<script>
import CustomInput from 'components/CustomInput'
import { required } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      form: {
        productName: '',
        productPrice: '',
        productDescription: '',
        errorMessages: {
          productName: {
            required: 'Required'
          },
          productPrice: {
            required: 'Required'
          }
        }
      }
    }
  },
  validations: {
    form: {
      productName: {
        required
      },
      productPrice: {
        required
      }
    }
  },
  methods: {
  },
  components: {
    CustomInput
  }
}
</script>

<style lang="stylus">
@import '~variables';

.containerWrapper {
  padding: 20px;
  .inputArea {
    margin-bottom: 25px;
    max-width: 350px;
  }
  .textArea {
    min-height: 200px;
    width: 100%;
  }
}

</style>
