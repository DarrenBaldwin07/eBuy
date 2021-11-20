<template>
  <div class='flex flex-row justify-center'>
    <div class='hidden bg-white h-screen w-2/5 md:flex'>Login</div>
    <div class='flex flex-col items-center md:m-auto mt-24'>
      <img :src="logo" alt="logo">
      <auth class='md:mt-0'/>
    </div>
  </div>
</template>

<script>
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