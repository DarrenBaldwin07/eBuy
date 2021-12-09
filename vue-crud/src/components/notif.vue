<template>
  <div class='transition w-screen h-screen z-10 absolute backdrop-filter backdrop-blur-md overflow-hidden'>
      <div class='flex flex-col items-center justify-center bg-white drop-shadow-lg w-96 rounded-3xl p-6 absolute text-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 xs:w-80 xxs:w-72' :class='[top]'>
          <img class='w-36 xs:w-28' :src="redCheck" alt="checkmark">
          <p class='text-primary3 m-2 font-bold'>Order Confirmed</p>
          <p class='m-2 text-primary2'>Thank you for your order. You will recieve a confirmation email shortly!</p>
          <p class='text-primary2 m-2'>Order Number: <span class='text-primary3'>{{ orderNum }}</span></p>
          <router-link class='m-2 text-white font-bold bg-primary1 px-16 py-3 rounded-lg text-xs xs:px-12' to='/store'>Continue Shopping</router-link>
      </div>
  </div>
</template>

<script>
import redCheck from '../assets/images/redCheck.svg'
export default {
    name: 'notification',

    data() {
        return {
            redCheck: redCheck,
            orderNum: '',
            counter: 0
        }
    },

    mounted() {
        // create random order id (fake)
        do {
            this.orderNum += Math.round(Math.random() * 100)
            this.counter += 1
        }
        while(this.counter < 4)
    }
}
</script>

<style>

</style>