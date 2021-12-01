<template>
  <div v-if='loading' class='loading flex flex-col justify-center items-center w-screen h-screen bg-primary2'>
    <div class='w-16 h-16 border-4 border-white border-t-4 border-t-primary1 bg-primary2 rounded-full animate-spin'></div>
    <img class='m-2' :src="logo" alt="logo">
  </div>
  <div v-if='!loading' class='container'>
    <div class='flex flex-col m-4 justify-center'>
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
      <div class='flex flex-row justify-between mt-4'>
        <div class='address rounded-xl p-8 shadow-xl h-full'>
          <div class='flex flex-row'>
            <div class='flex flex-col m-4'>
              <label class='text-primary2' for="name">First Name *</label>
              <input class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2' type="text" name="name" id="name">
            </div>
            <div class='flex flex-col m-4'>
              <label class='text-primary2' for="name">Last Name *</label>
              <input class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2' type="text" name="last-name" id="name">
            </div>
          </div>
          <div class='flex flex-row'>
            <div class='flex flex-col m-4'>
              <label class='text-primary2' for="name">Address *</label>
              <input class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2' type="text" name="Address" id="address">
            </div>
            <div class='flex flex-col m-4'>
              <label class='text-primary2' for="name">APT# *</label>
              <input class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2' type="text" name="APT" id="APT">
            </div>
          </div>
          <div class='flex flex-row'>
            <div class='flex flex-col m-4'>
              <label class='text-primary2' for="name">City *</label>
              <input class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2' type="text" name="City" id="City">
            </div>
            <div class='flex flex-col m-4'>
              <label class='text-primary2' for="Country">Country *</label>
              <select class='shadow-lg p-2 w-48 rounded-md' name="Country" id="country">
                <option value="Country" disabled='disabled'>Country</option>
                <option value="United States">United States</option>
                <option value="United States">Russia</option>
                <option value="United States">China</option>
              </select>
            </div>
          </div>
          <div class='flex flex-col m-4'>
              <label class='text-primary2' for="Country">Postal Code * </label>
              <input class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2' type="text" name="last-name" id="name">
          </div>
          <div class='m-4'>
            <button class='bg-primary2 p-2.5 text-white rounded-md w-32'>Order Items</button>
          </div>
        </div>
        <div class='cart flex flex-col justify-between shadow-xl rounded-xl p-8'>
          <div>
            <h1 class='text-primary2 text-xl font-bold'>Your Order</h1>
            <hr>
          </div>
          <div class='items h-72 overflow-hidden overflow-y-scroll'>
              <div v-for="i in data['data']" :key='i'>
                <div class='flex flex-row justify-between items-center bg-primary4 p-4 mt-2 rounded-lg w-72'>
                  <div class='flex flex-row mt-2 p-2 overflow-hidden'>
                    <img class='mr-2' src="" alt="Img">
                    <h1>{{ i['item'] }}</h1>
                  </div>
                  <button>X</button>
                </div>
              </div>
          </div>
          <div class='flex flex-row justify-between'>
            <p class='text-primary2 text-xl font-bold'>Total</p>
            <p class='text-primary2 text-2xl font-bold'>$1999</p>
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
  },

  methods: {
    deleteItem() {
      return 1
    }
  }
}
</script>

<style scoped>
  .items::-webkit-scrollbar {
    display: none;
  }

  .items {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>