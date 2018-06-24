<template>
  <div class="containerLogin">
    <form @submit.prevent="$v.touch()"  class="formWrapper">
      <span class="loginTitle">Welcome </span>
      <custom-input v-model='form.email' :formData='form' :handler='$v' name='email' float-label='Email' icon="person" class="inputLogin" @change="inputChanged()">
      </custom-input>
      <custom-input v-model='form.password' :formData='form' :handler='$v' name='password' float-label='Password' type='password' icon="vpn_key" class="inputLogin" @change="inputChanged()">
      </custom-input>
      <span v-if="form.generalErrorMessages" class="errorMessage">{{form.generalErrorMessages}}</span>
      <p @click="pushToSignUp()" class="signUpLabel">Dont have an account ? Sign Up.</p>
      <q-btn label="Sign In" class="loginBtn" @click="loginUser()" :loading="loginLoader"/>
    </form>
  </div>
</template>

<script>
import CustomInput from 'components/CustomInput'
import { required, email } from 'vuelidate/lib/validators'
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        email: '',
        password: '',
        generalErrorMessages: '',
        errorMessages: {
          email: {
            required: 'Please, enter your username',
            email: 'Enter valid email'
          },
          password: {
            required: 'Please, enter your password'
          }
        }
      }
    }
  },
  validations: {
    form: {
      email: {
        required,
        email
      },
      password: {
        required
      }
    }
  },
  computed: {
    ...mapGetters(['loginLoader'])
  },
  methods: {
    ...mapActions(['login']),
    loginUser () {
      this.$v.form.$touch()
      if (this.$v.form.$error) {
        console.log('errors')
      } else {
        this.login({
          email: this.form.email,
          password: this.form.password
        }).then( res => {
          this.$router.push('/')
        }).catch(err => {
          this.form.generalErrorMessages = err
        })
      }
    },
    inputChanged () {
      this.form.generalErrorMessages = ''
    },
    pushToSignUp () {
      this.$router.push('signup')
    }
  },
  components: {
    CustomInput
  },
}
</script>

<style lang="stylus" scoped>
@import '~variables';

.containerLogin {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  .formWrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400px;
    padding: 0 10px;
    width: 90%;
    margin: 0 auto;
    .loginTitle {
      text-align: center;
      display: inline-block;
      margin-bottom: 50px;
      font-size: 2rem;
      width: 100%;
    }
    .loginBtn {
      width: 80%;
      padding: 15px 0;
      border-radius: 5px;
      margin: 30px 10%;
    }
    .inputLogin {
      margin-bottom: 25px;
    }
    .errorMessage {
      color: #db2828;
      text-align: right;
      display: block;
      font-size: .9rem;
    }
    .signUpLabel {
      cursor: pointer;
      text-align: right;
      color: $color-red;
    }
  }
}


</style>
