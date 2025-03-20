<script setup>
const props = defineProps({});
const currentYear = new Date().getFullYear();
</script>

<template>
  <div>
    <footer class="fixed bottom-0 left-0 w-full py-6 bg-white shadow-lg">
      <div
        class="container mx-auto flex flex-col md:flex-row justify-between items-center text-center md:text-left"
      >
        <div class="mb-4 md:mb-0">
          <p>&copy; {{ currentYear }} Andrea Blass. All rights reserved.</p>
        </div>
        <div class="flex flex-wrap justify-center md:justify-end space-x-4">
          <a href="/about" class="hover:text-gray-400">About</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
</style>
