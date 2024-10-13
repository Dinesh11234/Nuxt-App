export default defineNuxtRouteMiddleware((to, from) => {
    if (process.client && !localStorage.getItem('isAuthenticated')) {
      return navigateTo('/login');
    }
  });
  