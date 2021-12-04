<template>
  <div class='container overflow-hidden'>
    <div class='nav flex flex-row justify-between items-center mt-4'>
      <router-link to='/'><img class='w-36 ssm:w-24' :src="img" alt="Logo"></router-link>
      <div class='hidden lg:flex'>
        <form @submit.prevent="" class='flex items-center'>
          <input class='border-2 border-gray-400 focus:outline-none focus:border-primary1 rounded-lg w-80 p-0.5' type="text" placeholder="">
          <button class='m-2 text-white bg-primary3 p-1 rounded-lg w-20 transition-colors hover:bg-primary1'>Search</button>
        </form>
      </div>
      <div class='flex flex-row items-center'>
        <router-link to='/cart'><img class='w-20 ssm:w-12 mr-4' :src="cart" alt="cart"></router-link>
        <a href="#"><img class='w-12 ssm:w-8' :src="profile" alt="profile"></a>
      </div>
    </div>


    <div class='hidden slg:flex items-center justify-center ssm:w-full'>
      <form @submit.prevent="" class='flex items-center'>
        <input class='border-2 border-gray-400 focus:outline-none focus:border-primary1 rounded-lg w-80 ssm:w-full p-0.5' type="text" placeholder="">
        <button class='m-2 text-white bg-primary3 p-1 rounded-lg w-20 transition-colors hover:bg-primary1'>Search</button>
      </form>
    </div>

    <div class='content'>
      <div class='text text-center flex flex-col max-w-3xl m-auto mt-24'>
        <h1 class='text-primary1 font-extrabold text-6xl'>View our top products Bellow!</h1>
        <p class='text-white m-4'>Cant find what ur looking for? Try searching using the field above.</p>
      </div>
      <div class='flex flex-row items-center justify-center flex-wrap mt-24'>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='stockage' price='1999.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='inStock' price='1999.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='stockage' price='1999.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='stockage' price='1999.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='inStock' price='1999.99'/>
        <item class='m-2' :imgSrc='MBP' title='Macbook Pro' :stock='inStock' price='1999.99'/>
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
    }
  }
}
</script>

<style>

</style>