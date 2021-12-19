<template>
  <div class='container overflow-hidden'>
    <div class='nav flex flex-row justify-between items-center mt-4 z-20 relative'>
      <img class='w-34 ssm:w-32 xs:w-24' :src="images.logo" alt="logo">
      <router-link class='transition duration-500 border-2 border-primary3 text-primary3 font-bold px-8 py-2 rounded-md  hover:text-white hover:bg-primary3' to='/login'>Sign Up</router-link>
    </div>
    <div class='hero-text flex flex-row items-center justify-between mt-12 sdd:flex-col sdd:items-start z-20 relative'>
      <div>
        <p class='text-white text-6xl font-bold w-650 slg:text-5xl sxl:w-400 mb-12 leading-snug sdd:w-650 ssm:text-4xl smd:w-500 ssm:w-300'>Get the most popular electronics at lower prices!</p>
        <router-link class='bg-primary3 py-2 px-8 rounded-md font-bold text-white z-20' to='/login'>Get Started</router-link>
      </div>
      <img class='w-500 z-10 mt-24 sl:w-96' :src="images.hero" alt="Empty Cart">
    </div>
    <div class='flex flex-col items-center z-20 relative mt-12'>
      <h1 class='text-center text-3xl font-bold text-white'>Check out some of our top deals bellow!</h1>
      <div class='bg-primary3 p-4 w-12 h-12 rounded-full mt-2 shadow-xl'><img :src="images.arrowDown" alt="arrow down"></div>
    </div>
    <div class='mt-10 flex flex-row items-center justify-center'>
      <div class='z-10 ml-3 w-72 hidden lg:block'>
        <div class='storeItem flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-xl w-full'>
            <div>
                <div>
                    <img class='w-40 h-40 m-auto rounded-2xl' :src="images.mx" alt="logitech mouse">
                    <h1 class='text-xl'>Logitech Mx master 3</h1>
                    <p class='font-bold'>$79.99</p>
                </div>
                <div class='flex flex-row items-center justify-between mt-2'>
                    <button class='bg-primary3 text-white pr-3 pl-3 pb-2 pt-2 rounded-md cursor-default'>Add to Cart</button>
                    <p class='m-2 bg-opacity-10 p-1 rounded-md' :class="{'text-green-500 bg-green-600': true, 'text-red-500 bg-red-600': false}">In Stock</p>
                </div>
            </div>
        </div>
      </div>

      <div class='z-10 ml-3 mb-8 w-72 hidden md:block'>
        <div class='storeItem flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-xl w-full'>
            <div>
                <div>
                    <img class='w-40 h-40 m-auto rounded-2xl' :src="images.Oculus" alt="Oculus Quest">
                    <h1 class='text-xl'>Oculus Quest 2</h1>
                    <p class='font-bold'>$199.99</p>
                </div>
                <div class='flex flex-row items-center justify-between mt-2'>
                    <button class='bg-primary3 text-white pr-3 pl-3 pb-2 pt-2 rounded-md cursor-default'>Add to Cart</button>
                    <p class='m-2 bg-opacity-10 p-1 rounded-md' :class="{'text-green-500 bg-green-600': true, 'text-red-500 bg-red-600': false}">In Stock</p>
                </div>
            </div>
        </div>
      </div>

      <div class='z-10 ml-3 mb-16 w-72 hidden sx:block ssm:block'>
        <div class='storeItem flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-xl w-full'>
            <div>
                <div>
                    <img class='w-40 h-40 m-auto rounded-2xl' :src="images.MBP" alt="Macbook Pro">
                    <h1 class='text-xl'>Macbook Pro</h1>
                    <p class='font-bold'>$799.99</p>
                </div>
                <div class='flex flex-row items-center justify-between mt-2'>
                    <button class='bg-primary3 text-white pr-3 pl-3 pb-2 pt-2 rounded-md cursor-default'>Add to Cart</button>
                    <p class='m-2 bg-opacity-10 p-1 rounded-md' :class="{'text-green-500 bg-green-600': true, 'text-red-500 bg-red-600': false}">In Stock</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
  <img class='fixed w-screen z-0 bottom-0' :src="images.wave" alt="wave">
</template>

<script>
import wave from '../assets/images/wave.svg'
import logo from '../assets/images/Logo.png'
import MBP from '../assets/images/MBP.svg'
import Oculus from '../assets/images/Oculus.jpg'
import mx from  '../assets/images/mxMaster.svg'
import hero from '../assets/images/heroImg.svg'
import arrowDown from '../assets/images/arrowDown.svg'
export default {
  name: "Home",


  data() {
    return {
      images: {
        wave,
        logo,
        MBP,
        Oculus,
        mx,
        hero,
        arrowDown,
      }
    }
  },

}

</script>

