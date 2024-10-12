<template>
    <Header @search="filterProducts" />
    <div id="cards">
        <div v-for="(product, index) in filteredProducts" :key="index" class="products-data">
            <img :src="`/_nuxt/assets/images/${product.src}.avif`" alt="Product Image" class="product-image" />
            <div class="product-info">
                <div class="product-name">{{ product.name }}</div>
                <div class="product-description">{{ product.description }}</div>
                <div class="product-price">₹{{ product.price }}</div>
            </div>
            <div 
                :class="['add-cart', {'active': product.addedToCart}]" 
                @click="commonStore.addToCart(product)">
                {{ product.addedToCart ? 'Added' : 'Add to Cart' }}
            </div>
        </div>
    </div>
    <Footer />
</template>
<script setup lang="ts">
const commonStore: any = useStore();
const { mensWearCollection }: any = storeToRefs(commonStore);
const filteredProducts = ref([...mensWearCollection.value]);
function filterProducts(searchTerm: string) {
  if (searchTerm) {
    filteredProducts.value = mensWearCollection.value.filter((product: any) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    filteredProducts.value = [...mensWearCollection.value];
  }
}
</script>
<style lang="scss">
#cards {
  @apply pt-[60px] flex flex-wrap justify-center gap-[48px] px-[20px] md:px-[60px];
  .products-data {
    @apply bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out w-[260px] h-[420px] relative;
    .product-image {
      @apply w-full h-[280px] object-cover rounded-t-lg;
    }
    .product-info {
      @apply flex flex-col items-center text-center;
    }
    .product-name {
      @apply font-semibold text-lg text-gray-700;
    }
    .product-description {
      @apply text-gray-500 text-sm h-[30px] overflow-hidden;
    }
    .product-price {
      @apply text-blue-600 font-bold text-lg;
    }
    .add-cart {
      @apply absolute bottom-0 w-full py-2 text-center bg-gradient-to-r from-blue-500 to-teal-500 text-white font-semibold rounded-b-lg cursor-pointer transition-colors hover:bg-gradient-to-l;
    }
    .active {
      @apply bg-white border border-blue-600;
      color: #2C4152;
    }
  }
}
body::-webkit-scrollbar {
  @apply hidden;
}
</style>
