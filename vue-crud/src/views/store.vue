<template>
  <template v-if='searched'>
    <div class='search-view z-30 bg-white w-800 slg:w-500 shadow-lg smd:w-300 p-8 rounded-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed overflow-hidden' :class="{'h-72': isSearchFound}">
      <div class='results'>
        <div class='flex flex-row items-center justify-between'>
          <div class='flex flex-row mb-2 items-center'>
            <h1 class='text-primary2 font-extrabold text-3xl slg:text-xl mb-2 smd:text-lg'>Search Results</h1>
            <img class='ml-4' :src="images.searchIcon" alt="search icon">
          </div>
          <button @click='removeSearchView()' class='hover:bg-gray-100 p-2 rounded-full transition-all'><img class='w-6' :src="images.closeButton" alt="close button"></button>
        </div>
        <hr>
      </div>
      <div v-if='!isSearchFound' class='items flex flex-row slg:flex-col items-center overflow-hidden slg:h-96 slg:overflow-scroll'>
        <div v-for="i in searchResults"  :key='i'>
          <item class='m-4 slg:m-0 slg:mt-2 slg:mb-4' :title="i['title']" :price="i['price']" :stock="i['stock']" :imgSrc="i['img']"/>
        </div>
      </div>
      <template v-if='isSearchFound'>
        <div class='flex flex-col items-center justify-center mx-auto w-56 mt-12 smd:mt-4'>
          <div class='bg-primary1 text-white w-12 h-12 flex items-center justify-center rounded-full font-extrabold text-2xl'>!</div>
          <p class='text-center text-primary2 mt-2'>Sorry, we could not find what you are looking for.</p>
        </div>
      </template>
    </div>
  </template>
  <div v-if='blurBg' class='fixed top-0 w-screen h-screen z-20 backdrop-blur-md'></div>
  <div class='container overflow-hidden'>
    <div ref='nav' class='flex flex-row items-center justify-between py-4 w-full bg-opacity-70'>
      <router-link to='/'><img class='w-34 ssm:w-24' :src="img" alt="Logo"></router-link>
      <div class='hidden lg:flex'>
        <form @submit.prevent="search(searchProduct)" class='flex items-center'>
          <input v-model='searchProduct' class='border-2 border-gray-400 focus:outline-none focus:border-primary1 rounded-lg w-80 p-0.5 px-4 placeholder-gray-400' type="text" placeholder="Search products...">
          <button class='m-2 text-white bg-primary3 p-1 rounded-lg w-20 transition-colors hover:bg-primary1'>Search</button>
        </form>
      </div>
      <div class='flex flex-row items-center' :class="{'fixed shadow-lg bg-primary2 z-10 p-4 rounded-3xl justify-center bg-opacity-70 mt-4': active}">
        <router-link to='/cart'><img class='w-20 ssm:w-14 mr-4' :src="cart" alt="cart"></router-link>
        <router-link to='#'><img class='w-12 ssm:w-10' :src="profile" alt="profile"></router-link>
      </div>
    </div>
    <div class='hidden slg:flex items-center justify-center ssm:w-full'>
      <form @submit.prevent="search(searchProduct2)" class='flex items-center'>
        <input v-model='searchProduct2' class='border-2 border-gray-400 focus:outline-none focus:border-primary1 rounded-lg w-80 ssm:w-full p-0.5' type="text" placeholder="Search products...">
        <button class='m-2 text-white bg-primary3 p-1 rounded-lg w-20 transition-colors hover:bg-primary1'>Search</button>
      </form>
    </div>

    <div class='content'>
      <div class='text text-center flex flex-col max-w-3xl m-auto mt-24'>
        <h1 class='text-primary1 font-extrabold text-6xl'>View our top products Bellow!</h1>
        <p class='text-white m-4'>Cant find what ur looking for? Try searching using the field above.</p>
      </div>
      <div class='flex flex-row items-center justify-center flex-wrap mt-24'>
        <item class='m-2' :imgSrc='images.MBPP' title='Macbook Pro M1 Pro' :stock='inStock' price='1999.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='inStock' price='1099.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='stockage' price='1099.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='stockage' price='1099.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='inStock' price='1099.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='inStock' price='1099.99'/>
        <item class='m-2' :imgSrc='Oculus' title='Oculus Quest 2' :stock='inStock' price='299.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='stockage' price='1099.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='inStock' price='1099.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='inStock' price='1099.99'/>
        <item class='m-2' :imgSrc='Oculus' title='Oculus Quest 2' :stock='inStock' price='299.99'/>
      </div>
    </div>
  </div>
  
  <footer>
    <!-- Add footer (made with love or somethin sicko) -->
  </footer>
</template>

<script>
import logo from '../assets/images/Logo.png'
import cart from '../assets/images/Cart.svg'
import profile from '../assets/images/Prof.svg'
import item from '../components/Item.vue'
import MBP from '../assets/images/MBP.svg'
import Oculus from '../assets/images/Oculus.jpg'
import { supabase } from '../helpers/supabaseClient'
import searchIcon from '../assets/images/searchIcon.svg'
import closeButton from '../assets/images/closeButton.svg'
import MBPP from '../assets/images/MBPP.svg'
export default {
  name: 'store',

  components: {
    item,
  },

  data() {
    return {
      img: logo,
      cart: cart,
      profile: profile,
      MBP: MBP,
      stockage: false,
      inStock: true,
      Oculus: Oculus,
      active: false,
      data: '',
      searched: false,
      blurBg: false,
      images: {
        searchIcon,
        closeButton,
        MBPP,
      },
      searchProduct: '',
      searchProduct2: '',
      searchResults: [],
      isSearchFound: false,

    }
  },

  async mounted() {
    this.data = await supabase.from('products')
    console.log(this.data)
    window.addEventListener('scroll', this.onScroll)
  },

  unmounted() {
    window.removeEventListener('scroll', this.onScroll);
  },

  methods: {
    onScroll() {
      
      if (window.scrollY > this.$refs.nav.offsetTop + 75){
        this.active = true
      } else {
        this.active = false
      }
    },

    search(model) {

      if (model != '') {

        for (let i = 0; i < this.data['data'].length; i++) {
          if (this.data['data'][i]['title'].toLowerCase().includes(model.toLowerCase())) {
            this.searchResults.push(this.data['data'][i])
          }
        }

        // if this runs then there are no seach results and we dont want to show search view - aka return out of function before showing the search view
        if (this.searchResults.length < 1) {
          // show error message - search not found
          this.isSearchFound = true
        }

        this.searched = true
        this.blurBg = true
      } 

      console.log('Searched!')
    },

    removeSearchView() {
      this.searched = false
      this.blurBg = false
      this.isSearchFound = false

      this.searchResults = []
      this.searchProduct = ''
      this.searchProduct2 = ''
    }
  }
}
</script>

<style scoped>

  html {
    scroll-behavior: smooth;
  }

  .items::-webkit-scrollbar {
    display: none;
  }

  .items {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
</style>