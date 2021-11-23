<template>
  <div class='container'>
    <div class='nav flex flex-row justify-between items-center m-4'>
      <img class='w-36' :src="img" alt="Logo">
      <div>
        <form @submit.prevent="" class='flex items-center'>
          <input class='border-2 border-gray-400 focus:outline-none focus:border-primary1 rounded-lg w-80 p-0.5' type="text" placeholder="">
          <button class='m-2 text-white bg-primary3 p-1 rounded-lg w-20 transition-colors hover:bg-primary1'>Search</button>
        </form>
      </div>
      <div class='flex flex-row items-center'>
        <button><img class='w-20 mr-4' :src="cart" alt="cart"></button>
        <a href="#"><img class='w-12' :src="profile" alt="profile"></a>
      </div>
    </div>

    <div class='content'>
      <div class='text text-center flex flex-col max-w-3xl m-auto mt-24'>
        <h1 class='text-primary1 font-extrabold text-6xl'>View our top products Bellow!</h1>
        <p class='text-white m-4'>Cant find what ur looking for? Try searching using the field above.</p>
      </div>
    </div>
  </div>
  
</template>

<script>
import logo from '../assets/images/Logo.png'
import cart from '../assets/images/Cart.svg'
import profile from '../assets/images/Prof.svg'
export default {
  name: 'store',

  data() {
    return {
      img: logo,
      cart: cart,
      profile: profile
    }
  }
}
</script>

<style>

</style>