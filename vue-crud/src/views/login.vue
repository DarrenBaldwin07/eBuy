<template>
  <div class='flex flex-row justify-center'>
    <div class='hidden bg-gradient-to-b from-primary1 to-primary3  h-screen w-2/5 lg:flex flex-col'>
      <div class='p-2 w-24 rounded-lg m-2'>
        <img class='w-24' :src="logo2" alt="logo">
      </div>
      <div class='flex flex-col justify-center items-center m-auto'>
         <div class='flex flex-col items-center justify-center min-w-96 text-center'>
          <img class='img w-3/4 relative' :src="images[currentImg]" alt="shopping">
          <h1 class='font-bold text-white text-3xl m-4 w-96'>{{ text[currentText] }}</h1>
        </div>
      </div>
    </div>
    <div class='flex flex-col items-center lg:m-auto mt-24'>
      <img :src="logo" alt="logo">
      <auth class='md:mt-0'/>
    </div>
  </div>
</template>

<script>
// - Find whats best for you - Easy payment process - Quick delivery
import logo from '../assets/images/Logo.png'
import logo2 from '../assets/images/L2.png'
import auth from '../components/Auth.vue'
import login1 from '../assets/images/Login1.svg'
import login2 from '../assets/images/Login2.svg'
import login3 from '../assets/images/Login3.svg'
export default {
  name: 'login',
  components: {
    auth
  },

  data() {
    return {
      logo: logo,
      logo2: logo2,
      currentImg: 0,
      currentText: 0,
      rightCounter: 1.5,
      images: [
        login3,
        login2,
        login1,
      ],

      text: [
        'Find the best products at the greatest price.',
        'Easy payment process.',
        'Quick delivery.',
      ]
      
    }
  },

  // called when view/page loads loads
  mounted() {
    this.animateImgs()
  },

  methods: {
    animateImgs() {
      setInterval(() => {

        this.currentImg++
        this.currentText++

        if (this.currentImg === 3) {
          this.currentImg = 0
          this.currentText = 0
        }
      }, 2000)
    },

    
  },
}
</script>

<style>

</style>