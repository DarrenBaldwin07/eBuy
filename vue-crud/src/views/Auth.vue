<template>
  <div class='flex flex-col items-center'>
    <div class='flex flex-col mt-12 items-center w-96 shadow-xl p-12 rounded-2xl'>
      <img class='w-36' src="../assets/images/Prof.svg" alt="">
      <div class='mt-4'>
        <h1 class='font-extrabold text-primary2 text-2xl'>Create your account </h1>
        <p class='text-gray-400'>If you already have an account, use the form bellow</p>
        <form class='mt-4' @submit.prevent='login()'>
          <div>
            <p class='font-bold text-primary2'>Email</p>
            <input style="background-image: url('https://compai.pub/v1/png/09e209de0c58153bece88929e281e6f6fc627bd812b736c9d300459c190bb041')"  class='bg-no-repeat border-2 border-gray-300  pl-10 p-2 bg-left w-full rounded-lg focus:outline-none' :class="{'border-green-500': valTrue, 'border-red-500': valFalse}" type="text" v-model='Email' @keyup="validate()">
          </div>
          <button class='w-full p-2 bg-primary1 mt-2 rounded-lg text-white cursor-pointer'>Create Account</button>
        </form>
      </div>
    </div>
  </div>
  
</template>

<script>
//import { ref } from "vue";
//import { supabase } from "../helpers/supabaseClient";
import { valForm } from '../helpers/valForm'

export default {
  name: 'Auth',
  

  data() {
    return {
      loading: false,
      Email: '',
      valFalse: false,
      valTrue: false,
    }
  },

  methods: {
    validate() {
      if (this.Email === '') {
        this.valTrue = false
        this.valFalse = false
        return
      }
      if (valForm(this.Email)) {
        this.valTrue = true
        return true
      } else {
        this.valFalse = true
        this.valTrue = false
        return false
      }
    },

    login() {
      
    }
  }

}
</script>

<style>

</style>