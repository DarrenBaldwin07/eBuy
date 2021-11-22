<template>
  <div class='flex flex-row justify-center'>
    <div class='hidden bg-gradient-to-b from-primary1 to-primary3  h-screen w-2/5 lg:flex'></div>
    <div class='flex flex-col items-center lg:m-auto mt-24'>
      <img :src="logo" alt="logo">
      <auth class='md:mt-0'/>
    </div>
  </div>
</template>

<script>
// - Find whats best for you - Easy payment process - Quick delivery
import logo from '../assets/images/Logo.png'
import auth from '../components/Auth.vue'
export default {
  name: 'login',
  components: {
    auth
  },

  data() {
    return {
      logo: logo
    }
  },
}
</script>

<style>

</style>