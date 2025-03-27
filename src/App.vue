<script setup>
import Header from '@/components/navigation/Header.vue';
import Footer from '@/components/navigation/Footer.vue';
import { ref } from 'vue';
import About from '@/components/views/About.vue';

const name = ref('Andrea');
const description = ref('Web developer and community lead.');

const updateName = (newName) => {
  name.value = newName;
};
</script>

<template>
  <Header />
  <main>
    <About :name="name" :description="description" @updateName="updateName" />
  </main>
  <Footer>
    <p>Este es el footer</p>
  </Footer>
</template>

