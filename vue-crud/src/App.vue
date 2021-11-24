<template>
   <item :imgSrc='MBP' title='Macbook Pro' :stock='stockage' price='$1999.99'/>
</template>

<script>
import item from './components/Item.vue'
import MBP from './assets/images/MBP.svg'
export default {
   name: 'app',
   

   components: {
      item: item
   },

   data() {
      return {
         stockage: true,
         MBP: MBP,
      }
   },


   methods: {
      handleStyles () {
        if (['/store'].includes(this.$route.path)) {
           document.body.className = 'bg-primary2'
        }

        if (['/'].includes(this.$route.path)) {
           document.body.className = 'bg-white'
        }

        if (['/login'].includes(this.$route.path)) {
           document.body.className = 'bg-primary2'
        }
      }
   },
    // Handle styles when the app is initially loaded
   mounted () {
      this.handleStyles()
   },
    // Handle styles when the route changes
   watch: {
      '$route' () {
         this.handleStyles()
      }
    }
}
</script>

<style>


</style>
