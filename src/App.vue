<script setup>
import Header from "@/components/navigation/Header.vue";
import Footer from "@/components/navigation/Footer.vue";
import About from "@/components/views/About.vue";
import {ref} from "vue";

const tittle = ref("Andrea Blass Website");
const showHeader = ref(true);

</script>

<template>
  <Header v-if="showHeader" :title="name" />

<main>
  <RouterView/>
</main>

  <Footer>
    <p>Este es el footer</p>
    <button
      @click="showHeader = !showHeader"
      class="mt-4 p-2 bg-blue-500 text-white rounded"
    >
      {{ showHeader ? "Ocultar Header" : "Mostrar Header" }}
    </button>
  </Footer>
</template>
