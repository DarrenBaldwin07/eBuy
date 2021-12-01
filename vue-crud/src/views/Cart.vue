<template>
  <div v-if='loading' class='loading flex flex-col justify-center items-center w-screen h-screen bg-primary2'>
    <div class='w-16 h-16 border-4 border-white border-t-4 border-t-primary1 bg-primary2 rounded-full animate-spin'></div>
    <img class='m-2' :src="logo" alt="logo">
  </div>
  <div v-if='!loading' class='container'>
    <div class='flex flex-col justify-center'>
      <div class='flex flex-row items-center justify-between mt-6'>
        <div>
          <div class='bg-primary1 p-6 w-44 h-44 flex items-center justify-center rounded-full'><img :src="cart" alt="Shopping Cart"></div>
          <h1 class='text-3xl text-primary2 font-extrabold m-4'>Shopping Cart</h1>
        </div>
        <div class='flex flex-row items-center'>
          <p class='mr-4'>Darren Baldwin</p>
          <button><img :src="profile" alt="profile"></button>
        </div>
      </div>
      <div class='flex flex-row justify-between'>
        <div class='address rounded-xl p-2 shadow-xl'>
          <div class='flex flex-row'>
            <div class='flex flex-col m-4'>
              <label for="name">First Name *</label>
              <input class='border-2' type="text" name="name" id="name">
            </div>
            <div class='flex flex-col m-4'>
              <label for="name">Last Name *</label>
              <input class='border-2' type="text" name="last-name" id="name">
            </div>
          </div>
          <div class='flex flex-row'>
            <div class='flex flex-col m-4'>
              <label for="name">Address *</label>
              <input class='border-2' type="text" name="last-name" id="name">
            </div>
            <div class='flex flex-col m-4'>
              <label for="name">APT# *</label>
              <input class='border-2' type="text" name="last-name" id="name">
            </div>
          </div>
          <div class='flex flex-row'>
            <div class='flex flex-col m-4'>
              <label for="name">City *</label>
              <input class='border-2' type="text" name="last-name" id="name">
            </div>
            <div class='flex flex-col m-4'>
              <label for="name">APT# *</label>
              <input class='border-2' type="text" name="last-name" id="name">
            </div>
          </div>
          
        </div>
        <div class='cart flex flex-col shadow-xl'>
          <div v-for="i in data['data']" :key='i'>
            <h1>{{ i['item'] }}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cart from '../assets/images/cart2.svg'
import { supabase } from '../helpers/supabaseClient'
import profile from '../assets/images/Prof.svg'
import logo from '../assets/images/Logo.png'
// IMPORT in a logo for loading screen (dont forget that u need a v-if for loader)
export default {

  // we dont have way to store images in db because of not havin premium version
    // build out id system to pull images from local files
  name: 'Cart',


  data() {
    return {
      cart: cart,
      data: '',
      userID: '',
      loading: false,
      profile: profile,
      logo: logo,
    }
  },

  async mounted() {
    // add loading animation
    try {
      // still need to work on loading animations
      this.loading = true

      this.userID = await supabase.auth.user().id
      this.data = await supabase.from('cart')
    } catch (error){
      console.log(error)
    } finally {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
    
  }
}
</script>

<style>

</style>