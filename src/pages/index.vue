<template>
  <MainContent />
</template>
<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
})
</script>
<style lang="scss">
</style>