<template>
    <div class='container'>
        <div class='mt-4'>
            <button @click='back()' class='back bg-primary3 text-white mb-4 px-2 py-2 rounded-md'>Back</button>
        </div>
        <div class='flex flex-col absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
            <div class='flex flex-col items-center'>
                <img class='w-64' :src="images.profile" alt="Profile Picture">
                <p class='text-primary1 font-bold mt-2'>{{ userData['email'] }}</p>
                <p class='text-primary2 text-xs mt-2'>Member of Ebuy since {{ date }}</p>
            </div>
            <div>
                <div class='flex flex-row justify-between items-center mt-6'>
                    <div class='flex flex-row items-center'>
                        <div class='bg-primary3 w-12 h-12 text-white rounded-full flex items-center justify-center mr-2'><img class='w-6' :src="images.cart" alt="Cart"></div>
                        <p class='text-primary2 font-bold'>Order Count</p>
                    </div>
                    <p class='text-primary2 font-bold'>{{ orderCount }}</p>
                </div>
            </div>
            <router-link @click="logOut()" class='bg-primary1 w-full rounded-md text-white mt-4 p-2 font-bold text-center' to='/'>Log out</router-link>
        </div>
    </div>
</template>
<script>
import profile from '../assets/images/Prof.svg'
import cart from '../assets/images/cart2.svg'
import { supabase } from '../helpers/supabaseClient'
export default {
    data() {
        return {
            date: '',
            loading: false,
            userData: '',
            userId: '',
            orderCount: '',
            images: {
                profile,
                cart,
            }
        }
    },

    async mounted() {
        try {
            this.loading = true
            this.userData = await supabase.auth.user()
            this.date = await new Date(this.userData['confirmed_at']).toDateString()
            this.orderCount = await supabase.from('profiles')
            this.orderCount = this.orderCount['data'][this.orderCount['data'].length - 1]['order_count']
        } catch (error) {
            console.log('Error: ', error)
        } finally {
            this.loading = false
            console.log(this.userData)
            console.log(this.date)
        }
    },

    methods: {
        back() {
            // Go back to last page (an actual back button)
            window.history.go(-1)
        },

        async logOut() {
            try {
                await supabase.auth.signOut()
            } catch (error) {
                console.log('Error: ', error)
            }
            
        },
    }
}
</script>
<style>
    
</style>