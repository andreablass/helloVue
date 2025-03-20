<script setup>
import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";
import Container from "@/components/container/Index.vue";
</script>

<template>
  <div class="w-full max-w-4xl mx-auto p-4 text-center">
    <h1 class="text-4xl font-bold mb-4">About Me</h1>
    <h2 class="text-xl mb-6">
      Hey there, I'm Andrea, a web developer, community lead and I ensure things
      run smoothly.
    </h2>
    <div class="flex justify-center items-center mt-8">
      <img
        src="/images/profile.jpg"
        alt="Profile Picture"
        class="w-48 h-48 rounded-full object-cover border-4 border-gray-300 shadow-lg"
      />
    </div>
    <div class="flex justify-center space-x-4 mt-8">
      <a href="https://www.linkedin.com" class="social-icon">
        <img
          src="/images/linkedin.png"
          alt="LinkedIn Icon"
          class="w-8 h-8 object-cover rounded shadow-lg"
        />
      </a>
      <a href="https://twitter.com" class="social-icon">
        <img
          src="/images/x.png"
          alt="Twitter Icon"
          class="w-8 h-8 object-cover rounded shadow-lg"
        />
      </a>
    </div>
  </div>
</template>

<style scoped>

</style>
