<template>
    <Header @search="filterProducts" />
    <div class="banner-slideshow">
      <div v-for="(banner, index) in banners" :key="index" class="banner-slide" v-show="currentBanner === index">
        <img :src="`/_nuxt/assets/images/${banner}.jpg`" alt="Banner Image" class="banner-image" />
      </div>
      <div class="banner-navigation">
        <button v-for="(banner, index) in banners" :key="index" :class="['nav-dot', { active: currentBanner === index }]" @click="currentBanner = index"></button>
      </div>
    </div>
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
const banners = ref(['banner1', 'banner2', 'banner3', 'banner4']);
const currentBanner = ref(0);
function filterProducts(searchTerm: string) {
  if (searchTerm) {
    filteredProducts.value = mensWearCollection.value.filter((product: any) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    filteredProducts.value = [...mensWearCollection.value];
  }
}
onMounted(() => {
  setInterval(() => {
    currentBanner.value = (currentBanner.value + 1) % banners.value.length;
  }, 2000);
});
</script>
<style lang="scss">
.banner-slideshow {
  @apply relative h-[400px] w-full overflow-hidden;

  .banner-slide {
    @apply absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out;
  }
  
  .banner-image {
    @apply w-full h-full object-cover;
  }

  .banner-navigation {
    @apply absolute bottom-5 left-0 right-0 flex justify-center gap-2;
    
    .nav-dot {
      @apply w-[10px] h-[10px] bg-gray-300 rounded-full cursor-pointer;
      transition: background-color 0.3s ease;
    }
    
    .active {
      @apply bg-blue-500;
    }
  }
}
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
