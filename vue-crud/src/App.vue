<template>
   <router-view/>
</template>

<script>

export default {
   methods: {
      handleStyles () {
        if (['/store'].includes(this.$route.path)) {
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
