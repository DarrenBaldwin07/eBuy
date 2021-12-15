<template>
  <popup v-if='hasOrdered'/> 
  <div v-if='loading' class='loading flex flex-col justify-center items-center w-screen h-screen bg-primary2 overflow-hidden'>
    <div class='w-16 h-16 border-4 border-white border-t-4 border-t-primary1 bg-primary2 rounded-full animate-spin'></div>
    <img class='m-2' :src="logo" alt="logo">
  </div>
  <div v-if='!loading' class='container overflow-hidden'>
    <div class='flex flex-col m-4 justify-center'>
      <div>
        <div class='flex flex-row justify-between items-center'>
          <router-link class='back bg-primary3 text-white mb-4 px-2 py-2 rounded-md' to='/store'>Back</router-link>
          <div class='flex flex-row items-center'>
            <p class='mr-4 ssm:m-2 text-xs'>Darren</p>
            <button><img class='w-12' :src="profile" alt="profile"></button>
          </div>
        </div>
          <div class='bg-primary1 p-6 w-44 h-44 flex items-center justify-center rounded-full mt-6 smd:w-28 smd:h-28'><img class='smd:w-12 xs:w-10' :src="cart" alt="Shopping Cart"></div>
          <h1 class='text-3xl text-primary2 font-extrabold smd:text-xl ssm:w-36 mt-4'>Shopping Cart</h1>
      </div>
      <div class='flex flex-row slg:flex-col justify-between mt-4'>
        <div class='address rounded-xl p-8 shadow-xl h-full'>
          <form class='' @keyup="isFormFilled()" @submit.prevent='makeOrder()'>
            <div class='slg:flex flex-col items-center'>
              <div class='flex flex-row xs:flex-col'> 
                <div class='flex flex-col m-4'>
                  <label class='text-primary2' for="name">First Name *</label>
                  <input v-model='firstName' class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2 xs:w-60' type="text" name="name" id="name">
                </div>
                <div class='flex flex-col m-4'>
                  <label class='text-primary2' for="name">Last Name *</label>
                  <input v-model='lastName' class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2 xs:w-60' type="text" name="last-name" id="name">
                </div>
              </div>
              <div class='flex flex-row xs:flex-col'>
                <div class='flex flex-col m-4'>
                  <label class='text-primary2' for="name">Address *</label>
                  <input v-model='address' class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2 xs:w-60' type="text" name="Address" id="address">
                </div>
                <div class='flex flex-col m-4'>
                  <label class='text-primary2' for="name">APT# *</label>
                  <input v-model='apt' class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2 xs:w-60' type="text" name="APT" id="APT">
                </div>
              </div>
              <div class='flex flex-row xs:flex-col'>
                <div class='flex flex-col m-4'>
                  <label class='text-primary2' for="name">City *</label>
                  <input v-model='city' class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2 xs:w-60' type="text" name="City" id="City">
                </div>
                <div class='flex flex-col m-4'>
                  <label class='text-primary2' for="Country">Country *</label>
                  <select class='shadow-lg p-2 w-48 rounded-md xs:w-60' name="Country" id="country">
                    <option value="Country" disabled='disabled'>Country</option>
                    <option value="United States">United States</option>
                    <option value="United States">Russia</option>
                    <option value="United States">China</option>
                  </select>
                </div>
              </div>
              <div class='flex flex-col m-4'>
                  <label class='text-primary2' for="Country">Postal Code * </label>
                  <input v-model='postalCode' class='border-2 border-primary3 focus:outline-none rounded-md w-48 pl-2 smd:w-60' type="text" name="last-name" id="name">
              </div>
              <div class='m-4'>
                <button class='bg-primary2 bg-opacity-40 p-2.5 text-red text-white rounded-md smd:w-60' :class="{'bg-opacity-100': isFilled}">Order Items</button>
              </div>
            </div>
          </form>
        </div>
        <div class='cart flex flex-col justify-between shadow-xl rounded-xl p-8 slg:mt-8'>
          <div>
            <h1 class='text-primary2 text-xl font-bold'>Your Order</h1>
            <hr>
          </div>
          <div class='items h-72 overflow-hidden overflow-y-scroll'>
            <template v-if='empCart'>
              <div class='flex flex-row items-center bg-primary1 p-4 rounded-lg mt-2'>
                <img class='mr-2 xs:w-12' :src="cart" alt="Shopping Cart">
                <h1 class='text-white font-bold' >Your cart is empty.</h1>
              </div>
            </template>
            <div v-for="(i, index) in data['data']" :key='i.id'>
              <div class='flex flex-row justify-between items-center bg-primary4 p-4 mt-2 rounded-lg w-full'>
                <div class='flex flex-row items-center mt-2 p-2 overflow-hidden'>
                  <div>
                    <img class='mb-2 w-14 rounded-md xs:w-12' :src="i['image']" alt="Image">
                    <p class='text-primary3 font-bold xs:text-xs'>${{ i['price'] }}</p>
                  </div>
                  <h1 class='ssm:text-xs'>{{ i['item'] }}</h1>
                </div>
                <button @click='deleteItem(index)'><img class='w-12' :src="delBtn" alt="delete button"></button>
              </div>
            </div>
          </div>
          <div class='flex flex-row justify-between'>
            <p class='text-primary2 text-xl font-bold'>Total</p>
            <p class='text-primary2 text-2xl font-bold'>${{ totalPrice }}</p>
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
import deleteBtn from '../assets/images/delete.svg'
import popup from '../components/notif.vue'
import backBtn from '../assets/images/backBtn.svg'
// IMPORT in a logo for loading screen (dont forget that u need a v-if for loader)
export default {

  // we dont have way to store images in db because of not havin premium version
    // build out id system to pull images from local files
  name: 'Cart',

  components: {
    popup,
  },

  data() {
    return {
      cart: cart,
      data: '',
      orderCount: '',
      userID: '',
      loading: false,
      profile: profile,
      logo: logo,
      delBtn: deleteBtn,
      empCart: false,
      totalPrice: 0,
      hasOrdered: false,
      backBtn: backBtn,
      firstName: '',
      lastName: '',
      address: '',
      apt: '',
      city: '',
      postalCode: '',
      isFilled: false,
    }
  },


  async mounted() {
    // add loading animation
    try {
      // still need to work on loading animations
      this.loading = true
      window.removeEventListener('scroll', this.disScroll)
      this.userID = await supabase.auth.user().id
      this.data = await supabase.from('cart')

      if (this.data['data'].length === 0) {
        this.empCart = true
      }

      for (let i = 0; i < this.data['data'].length; i++) {
        this.totalPrice += Number(this.data['data'][i]['price'])
      }

      console.log(this.data)
    } catch (error) {
      console.log(error)
    } finally {
      setTimeout(() => {
        this.loading = false
      }, 1000)
    }
  },

  unmounted() {
     window.removeEventListener('scroll', this.disScroll)
  },

  methods: {
    async deleteItem(index) {
      // deletes from actual DB
      await supabase.from('cart').delete().match(this.data['data'][index])

      // update total price 
      this.totalPrice -= Number(this.data['data'][index]['price'])
      this.totalPrice = Math.floor(this.totalPrice)

      // delete from frontend
      this.data['data'].splice(index, 1)

      // check if cart is empty
      if (this.data['data'].length === 0) {
        this.empCart = true
        this.totalPrice = 0
      }
    },

    disScroll() {
      window.scrollTo(0, 0)
    },

    async makeOrder() {

      if (this.data['data'].length != 0) {
        if (this.isFormFilled()) {
          this.hasOrdered = true
          window.scrollTo(0, 0)
          // disable scroll
          window.addEventListener('scroll', this.disScroll)

          // clear Cart - increment order count 
          try {
            // delete everything from cart
            await supabase.from('cart').delete()
            this.orderCount = await supabase.from('profiles')
            this.userID = await supabase.auth.user().id
            
            if (this.orderCount['data'].length < 1) {
              await supabase.from('profiles').insert([{user_id: this.userID, order_count: 1}])
            } else {
              await supabase.from('profiles').insert([{user_id: this.userID, order_count: this.orderCount['data'][this.orderCount['data'].length - 1]['order_count'] + 1}])
            }

            
          } catch (error) {
            console.log('Error: ', error)
          } finally {
            console.log(this.orderCount)
          }
          
        }
      }
    },

    isFormFilled() {
      if (this.firstName != '' && this.lastName != '' && this.address != '' && this.apt != '' && this.postalCode != '' && this.city != '') {
        if (this.data['data'].length != 0) {
          this.isFilled = true
          return true
        }
      }

      this.isFilled = false
      return false
    }
  }
}
</script>

<style scoped>

  .back {
    padding-left: 1em;
    padding-right: 1em;
  }
  .items::-webkit-scrollbar {
    display: none;
  }

  .items {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>