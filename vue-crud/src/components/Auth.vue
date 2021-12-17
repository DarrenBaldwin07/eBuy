<template>
  <div class='flex flex-col items-center'>
    <div v-if='loading' class='shadow-lg flex flex-row p-2 rounded-lg bg-white m-4'>
      <div class='circle1 w-4 h-4 m-1 bg-primary1 rounded-full animate-bounce'></div>
      <div class='circle2 w-4 h-4 m-1 bg-primary1 rounded-full animate-bounce'></div>
      <div class='circle3 w-4 h-4 m-1 bg-primary1 rounded-full animate-bounce'></div>
    </div>
    <div class='flex flex-col mt-4 items-center w-72 shadow-xl p-8 md:p-12 md:w-96 rounded-2xl bg-white'>
      <img class='w-36' src="../assets/images/Prof.svg" alt="">
      <div class='mt-4'>
        <h1 class='font-extrabold text-primary2 text-xl md:text-2xl'>Create your account </h1>
        <p class='text-gray-400'>If you already have an account, use the form bellow:</p>
        <form class='mt-4' @submit.prevent='login()'>
          <div>
            <p class='font-bold text-primary2'>Email</p>
            <input style="background-image: url('https://compai.pub/v1/png/09e209de0c58153bece88929e281e6f6fc627bd812b736c9d300459c190bb041')"  class='bg-no-repeat border-2 border-gray-300  pl-10 p-2 bg-left w-full rounded-lg focus:outline-none' :class="{'border-green-500': valTrue, 'border-red-500': valFalse}" onFocus="window.scrollTo(0, 0);" type="text" v-model='email' @keyup="validate()" placeholder="Johndoe@gmail.com">
          </div>
          <button class='w-full p-2 bg-primary3  mt-2 rounded-lg text-white cursor-pointer' :class="{'bg-opacity-40': cantSub}">Create Account</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// push to dev branch for testing and development - (use master for production)
import { supabase } from "../helpers/supabaseClient"
import { valForm } from '../helpers/valForm'

export default {
  name: 'Auth',
  

  data() {
    return {
      loading: false,
      email: '',
      valFalse: false,
      valTrue: false,
      cantSub: true
    }
  },

  methods: {
    validate() {
      if (this.email === '') {
        this.valTrue = false
        this.valFalse = false
        this.cantSub = true
        return false
      }
      if (valForm(this.email)) {
        this.valFalse = false
        this.valTrue = true
        this.cantSub = false
        return true
      } else {
        this.valFalse = true
        this.valTrue = false
        this.cantSub = true
        return false
      }
    },

    async login() {
      if (this.validate()) {
        try {
          this.loading = true
          const { error } = await supabase.auth.signIn({ email: this.email }, {redirectTo: 'https://vue-crud-neon.vercel.app/store'})
          if (error) throw error
          alert('We have sent a confirmation link to your email!')
        } catch (error) {
          alert(error.error_description || error.message)
        } finally {
          this.loading = false
          this.email = ''
          this.valFalse = false
          this.valTrue = false
        }
      }
    }
  }

}
</script>

<style scoped>
  .circle1{
		animation-delay: 0.1s;
	}
	.circle2{
		animation-delay: 0.2s;
	}
	.circle3{
		animation-delay: 0.3s;
	}
</style>