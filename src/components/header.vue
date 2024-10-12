<template>
    <div id="header">
        <div class="brand-name">Mens LifeStyle</div>
        <div id="nav-bar">
            <input class="search-box" v-model="searchQuery" placeholder="Search Products" @input="searchProduct" />
            <div class="home-page" :class="{ active: isHomeActive }" @click="backToHome">
                Home
            </div>
            <div class="cart" :class="{ active: isCartActive }" @click="moveToCart">
                Cart
            </div>
            <div class="profile-container">
                <img src="../assets/images/profile-demo.png" class="profile-popup" @click="toggleDropdown" alt="Profile" />
                <div v-if="isDropdownVisible" class="dropdown">
                    <button class="logout-button" @click="logout">Logout</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const router = useRouter();
const route = useRoute();
const searchQuery = ref('');
const isDropdownVisible = ref(false);
const emit = defineEmits(['search']);
function searchProduct() {
  emit('search', searchQuery.value);
}
function toggleDropdown() {
    isDropdownVisible.value = !isDropdownVisible.value;
}
function moveToCart(){
    router.push('/cart');
}
function backToHome(){
    router.push('/');
}
const logout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
const isHomeActive = computed(() => route.path === '/');
const isCartActive = computed(() => route.path === '/cart');
</script>
<style lang="scss">
#header{
    @apply flex justify-between sticky py-4 shadow-md border-t-4 items-center px-6 md:px-[150px];
    background-color: #f4f4f4;
    border-color: #333;
    .brand-name{
        @apply text-[24px] md:text-[36px] font-extrabold font-mono;
        color: #2C4152;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
        letter-spacing: 2px;
    }
    #nav-bar{
        @apply flex gap-3 md:gap-6 justify-between items-center;
        .search-box{
            @apply w-[180px] md:w-[250px] border-[2px] rounded-full px-4 py-2;
            border-color: #2C4152;
            background-color: white;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            &:focus {
                outline: none;
                box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.2);
            }
        }
        .profile-container {
            position: relative;
            .profile-popup {
                @apply w-[45px] rounded-full cursor-pointer;
            }
            .dropdown {
                @apply absolute right-0 mt-2 bg-white border border-gray-300 shadow-md rounded-md;
                z-index: 10;
                .logout-button {
                    @apply block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-200;
                    border-radius: 0;
                    cursor: pointer;
                }
            }
        }
        .cart, .home-page{
            @apply text-[16px] md:text-[18px] font-medium cursor-pointer px-4 py-2;
            border-radius: 9999px;
            background-color: #2C4152;
            color: white;
            transition: background-color 0.3s ease, transform 0.3s ease;
            &:hover {
                background-color: #f68084;
                transform: translateY(-2px);
            }
        }
        .active {
            background-color: #f68084 !important;
            transform: translateY(-2px);
        }
    }
}
</style>
