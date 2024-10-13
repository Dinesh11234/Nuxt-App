<template>
    <div id="header">
      <div class="brand-name">Mens LifeStyle</div>
      <div id="nav-bar">
        <div class="search-box-container">
          <input
            class="search-box"
            v-model="searchQuery"
            placeholder="Search Products"
            @input="searchProduct"
          />
          <i class="fas fa-search search-icon"></i>
        </div>
        <div class="home-page" :class="{ active: isHomeActive }" @click="backToHome">
          Home
        </div>
        <div class="cart" :class="{ active: isCartActive }" @click="moveToCart">
          Cart
        </div>
        <div class="profile-container" ref="profileContainerRef">
          <img
            src="../assets/images/profile-demo.png"
            class="profile-popup"
            @click="toggleDropdown"
            alt="Profile"
          />
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
const profileContainerRef: Ref<any> = ref(null);
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
    router.push('/home');
}
const logout = () => {
  localStorage.removeItem('isAuthenticated')
  router.push('/login')
}
const isHomeActive = computed(() => route.path === '/home');
const isCartActive = computed(() => route.path === '/cart');
function handleClickOutside(event: MouseEvent) {
  if (profileContainerRef.value && !profileContainerRef.value.contains(event.target as Node)) {
    isDropdownVisible.value = false;
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
<style lang="scss">
#header {
    @apply flex justify-between sticky top-0 py-4 shadow-lg border-t-4 items-center px-6 md:px-[150px];
    background: linear-gradient(135deg, #f4f4f4 0%, #e0e0e0 100%);
    border-color: #333;
    transition: background-color 0.5s ease-in-out;
    z-index: 50;
  
    .brand-name {
      @apply text-[30px] md:text-[40px] font-extrabold font-sans;
      color: #2c4152;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
      letter-spacing: 3px;
    }
  
    #nav-bar {
      @apply flex gap-4 md:gap-8 justify-between items-center;
  
      .search-box-container {
        @apply relative flex items-center;
        
        .search-box {
          @apply w-[200px] md:w-[280px] border-2 rounded-full px-5 py-2;
          border-color: #2c4152;
          background-color: white;
          box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          &:focus {
            outline: none;
            box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.2);
          }
        }
  
        .search-icon {
          @apply absolute right-3 text-gray-500;
        }
      }
  
      .profile-container {
        position: relative;
  
        .profile-popup {
          @apply w-[45px] rounded-full cursor-pointer transition-all duration-300;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        }
  
        .dropdown {
          @apply absolute right-0 mt-3 bg-white border border-gray-300 shadow-lg rounded-lg;
          z-index: 10;
          .logout-button {
            @apply flex items-center justify-center gap-2 w-full text-left px-4 py-3 font-semibold text-white;
            background: linear-gradient(135deg, #ff6b6b 0%, #f68084 100%);
            border-radius: 12px;
            box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
            transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;

            &:hover {
                background: linear-gradient(135deg, #f55555 0%, #f25674 100%);
                transform: translateY(-3px);
                box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
            }

            .logout-icon {
                @apply text-white text-lg;
            }
          }
        }
      }
  
      .cart, .home-page {
        @apply text-[18px] md:text-[20px] font-medium cursor-pointer px-4 py-2;
        border-radius: 9999px;
        background-color: #2c4152;
        color: white;
        transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
        &:hover {
          background-color: #f68084;
          transform: translateY(-2px);
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
        }
      }
  
      .active {
        background-color: #f68084 !important;
        transform: translateY(-2px);
        box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.1);
      }
    }
}
</style>
  