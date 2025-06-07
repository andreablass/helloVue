<script setup>
import { ref, readonly, provide } from 'vue';
import Hijo from '@/components/home/Hijo.vue';
import Container from '@/components/container/Index.vue'; // Asegúrate de tener este import si usas Container

const title = ref('Andrea Blass');

provide('title', readonly(title));
</script>

<template>
  <div>HomePage</div>

  <Container>
    <div class="bg-pink-100 rounded px-4 py-2 my-4 grid gap-4">
      <div>El titulo es: <strong>{{ title }}</strong></div>
      <Hijo />
    </div>
  </Container>

  <Container>
    <div class="bg-white rounded shadow p-4 max-w-md mx-auto mt-6">
      <RouterLink :to="{ name: 'profile', params: { username: 'andy' } }">
        Perfil
      </RouterLink>
      <h2 class="text-lg font-bold mb-2">Feed</h2>
      <p>📢 Andrea publicó una nueva actualización.</p>
    </div>
  </Container>
</template>