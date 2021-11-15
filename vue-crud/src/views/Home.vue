<template>
  <div class='text-center mt-12' id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to='/login'>Login</router-link> |
    <router-link to='/store'>Store</router-link>
  </div>
  <h1>{{ userInfo }}</h1>
  <h1>{{ user }}</h1>
  <button @click="getData()">Click</button>
</template>

<script>
import { supabase } from '../helpers/supabaseClient'
export default {
  name: "Home",

  data() {
    return {
      user: '',
      userInfo: supabase.auth.user(),
      userID: '',
    }
  },

  methods: {
    async getData() {
      // get data from table with select
      //const { data } = await supabase.from('cart').insert([{item: 'Laptop'}, {userId: String(this.userID)}])
      //const { data2 } = await supabase.from('cart').insert([{user_id: String(this.userID), item: 'Laptop Dell'}])
      const { data } = await supabase.from('cart').select('item')
      this.userID = supabase.auth.user().id
      this.user = data
    }
  }
  
  
  
};
</script>
