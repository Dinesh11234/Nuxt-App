<template>
  <div class="auth-container">
    <div class="auth-box">
      <h2 class="auth-title">Sign Up</h2>
      <form @submit.prevent="signupUser" class="auth-form">
        <div class="auth-input-group">
          <label for="email" class="auth-label">Email</label>
          <input v-model="email" type="email" id="email" required class="auth-input" />
        </div>
        <div class="auth-input-group">
          <label for="password" class="auth-label">Password</label>
          <input v-model="password" type="password" id="password" required class="auth-input" />
        </div>
        <button type="submit" class="auth-button">Sign Up</button>
      </form>
      <p class="auth-login">
        Already have an account? <NuxtLink href="/login" class="auth-link">Login here</NuxtLink>
      </p>
    </div>
  </div>
</template>
<script setup lang="ts">
const email = ref('')
const password = ref('')
const router = useRouter()
const signupUser = async () => {
  try {
    localStorage.setItem('isAuthenticated', 'true')
    router.push('/')
  } catch (error) {
    console.error(error)
  }
}
onMounted(() => {
  if (localStorage.getItem('isAuthenticated')) {
    router.push('/')
  }
})
</script>

<style scoped lang="scss">
.auth-container {
  @apply flex justify-center items-center min-h-screen bg-gradient-to-br from-purple-200 via-pink-200 to-blue-300;
  .auth-box {
    @apply bg-white p-10 rounded-xl shadow-xl w-96 transform hover:scale-105 transition-transform duration-300 ease-in-out;
  }
  .auth-title {
    @apply text-3xl font-extrabold mb-8 text-center text-gray-800 tracking-wide;
  }
  .auth-form {
    @apply space-y-6;
  }
  .auth-input-group {
    @apply flex flex-col;
  }
  .auth-label {
    @apply mb-2 text-gray-700 text-sm font-semibold tracking-wider;
  }
  .auth-input {
    @apply px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-all duration-300 ease-in-out;
  }
  .auth-input:hover {
    @apply border-blue-400;
  }
  .auth-button {
    @apply w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-full hover:bg-gradient-to-l hover:from-purple-600 hover:to-blue-600 transition-all duration-300 ease-in-out font-semibold shadow-lg hover:shadow-xl;
  }
  .auth-login {
    @apply text-gray-600 mt-6 text-center;
  }
  .auth-link {
    @apply text-blue-500 font-medium hover:underline hover:text-purple-500 transition-colors duration-200;
  }
}
</style>
