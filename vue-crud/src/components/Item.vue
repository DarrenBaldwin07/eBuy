<template>
    <div class='storeItem flex flex-col items-center justify-center bg-white p-4 shadow-lg rounded-xl w-64'>
        <div>
            <div>
                <img class='w-40 m-auto' :src="imgSrc" :alt="title">
                <h1 class='text-xl'>{{ title }}</h1>
                <p class='font-bold'>{{ price }}</p>
            </div>
            <div class='flex flex-row items-center mt-2'>
                <button class='bg-primary3 text-white pr-3 pl-3 pb-2 pt-2 rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'>Add to Cart</button>
                <p class='m-2 bg-opacity-10 p-1 rounded-md' :class="{'text-green-500 bg-green-600': stock, 'text-red-500 bg-red-600': !stock}">{{ stockText }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'item',
    props: {
        imgSrc: String,
        title: String,
        price: Number,
        stock: Boolean,
    },

    data() {
        return {
            stockText: this.stock ? 'In Stock' : 'Out of Stock'
        }
    },


}
</script>

<style scoped>

</style>