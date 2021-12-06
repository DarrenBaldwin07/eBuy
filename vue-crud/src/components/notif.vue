<template>
  <div class='w-screen h-screen z-10 absolute backdrop-filter backdrop-blur-md'>
      <div class='flex flex-col items-center justify-center bg-gradient-to-b from-primary1 to-primary3 w-80 rounded-3xl p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
          <img class='w-36' :src="checkmark" alt="checkmark">
          <p class='text-white m-2'>Thanks for your order!</p>
      </div>
  </div>
</template>

<script>
import checkmark from '../assets/images/checkMark.svg'
export default {
    name: 'notification',

    data() {
        return {
            checkmark: checkmark,
        }
    }
}
</script>

<style>

</style>