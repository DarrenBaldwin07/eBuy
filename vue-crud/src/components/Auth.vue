<template>
  <div class='flex flex-col items-center mt-12'>
    <div v-if='loading' class='shadow-lg flex flex-row p-2 rounded-lg'>
      <div class='circle1 w-4 h-4 m-1 bg-primary1 rounded-full animate-bounce'></div>
      <div class='circle2 w-4 h-4 m-1 bg-primary1 rounded-full animate-bounce'></div>
      <div class='circle3 w-4 h-4 m-1 bg-primary1 rounded-full animate-bounce'></div>
    </div>
    <div class='flex flex-col mt-4 items-center w-96 shadow-xl p-12 rounded-2xl'>
      <img class='w-36' src="../assets/images/Prof.svg" alt="">
      <div class='mt-4'>
        <h1 class='font-extrabold text-primary2 text-2xl'>Create your account </h1>
        <p class='text-gray-400'>If you already have an account, use the form bellow</p>
        <form class='mt-4' @submit.prevent='login()'>
          <div>
            <p class='font-bold text-primary2'>Email</p>
            <input style="background-image: url('https://compai.pub/v1/png/09e209de0c58153bece88929e281e6f6fc627bd812b736c9d300459c190bb041')"  class='bg-no-repeat border-2 border-gray-300  pl-10 p-2 bg-left w-full rounded-lg focus:outline-none' :class="{'border-green-500': valTrue, 'border-red-500': valFalse}" type="text" v-model='email' @keyup="validate()" placeholder="Johndoe@gmail.com">
          </div>
          <button class='w-full p-2 bg-primary3 mt-2 rounded-lg text-white cursor-pointer'>Create Account</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

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
    }
  },

  methods: {
    validate() {
      if (this.email === '') {
        this.valTrue = false
        this.valFalse = false
        return false
      }
      if (valForm(this.email)) {
        this.valFalse = false
        this.valTrue = true
        return true
      } else {
        this.valFalse = true
        this.valTrue = false
        return false
      }
    },

    async login() {
      if (this.validate()) {
        try {
          this.loading = true
          const { error } = await supabase.auth.signIn({ email: this.email })
          if (error) throw error
          alert('Check your email for the login link')
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