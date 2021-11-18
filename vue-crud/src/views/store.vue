<template>
  <div class='bg-primary2'>
    <img class='w-36' :src="img" alt="Logo">
    <h1>STORE PAGE</h1>
  </div>
  
</template>

<script>
import logo from '../assets/images/Logo.png'
export default {
  name: 'store',

  data() {
    return {
      img: logo
    }
  }
}
</script>

<style>

</style>