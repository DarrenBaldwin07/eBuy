<template>
  <div class='text-center mt-12' id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to='/login'>Login</router-link> |
    <router-link to='/store'>Store</router-link>
  </div>
  <h1>{{ user }}</h1>
  <button @click="test()">Click</button>
</template>

<script>
import { supabase } from '../helpers/supabaseClient'
export default {
  name: "Home",

  data() {
    return {
      user: ''
    }
  },

  methods: {
    async test() {
      // get data from table with select
      const data = await supabase.from('Cart').select('item')
      //const data = await supabase.from('Cart').insert([{item: 'test'}])
      this.user = data.data[0].item
     
    }
  }
  
  
  
};
</script>
