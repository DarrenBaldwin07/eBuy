<template>
    <div class='w-72'>
        <div class='storeItem flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-xl w-full'>
            <div>
                <div>
                    <img class='w-40 h-40 m-auto rounded-2xl' :src="imgSrc" :alt="title">
                    <h1 class='text-xl'>{{ title }}</h1>
                    <p class='font-bold'>${{ price }}</p>
                </div>
                <div class='flex flex-row items-center justify-between mt-2'>
                    <button @click='addCart()' class='bg-primary3 text-white pr-3 pl-3 pb-2 pt-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'><div class='flex flex-row'><img v-if='show' class='w-4 mr-2' :src="img" alt="Checkmark">{{ cartText }}</div></button>
                    <p class='m-2 bg-opacity-10 p-1 rounded-md' :class="{'text-green-500 bg-green-600': stock, 'text-red-500 bg-red-600': !stock}">{{ stockText }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { supabase } from '../helpers/supabaseClient'
import checkmark from '../assets/images/checkMark.svg'
export default {
    name: 'item',
    props: {
        imgSrc: String,
        title: String,
        price: String,
        stock: Boolean,
        id: Number,
    },
    
    data() {
        return {
            stockText: this.stock ? 'In Stock' : 'Out of Stock',
            userID: '',
            show: false,
            cartText: 'Add to Cart',
            img: checkmark,
        }
    },

    methods: {
        async addCart() {
            if (this.stock) {
                this.userID = supabase.auth.user().id
                await supabase.from('cart').insert([{user_id: String(this.userID), item: `${this.title}`, price: this.price, image: this.imgSrc}])
                const { data } = await supabase.from('cart')
                console.log(data)

                this.show = true
                this.cartText = 'Added to Cart'

                setTimeout(() => {
                    this.show = false
                    this.cartText = 'Add to Cart'
                }, 1500)
            }
        }
    },
}
</script>

<style scoped>

</style>