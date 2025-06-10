<script setup>
import { ref, readonly, provide } from "vue";
import Hijo from "@/components/home/Hijo.vue";
import { useModalStore } from "@/stores/modal";

import Modal from "@/components/ui/modal.vue";

const modal = useModalStore();

const title = ref("Andrea Blass");

provide("title", readonly(title));
</script>

<template>
  <div>HomePage</div>

  <Container>
    <div class="bg-pink-100 rounded px-4 py-2 my-4 grid gap-4">
      <div>
        El titulo es: <strong>{{ title }}</strong>
      </div>
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

  <Container>
    <button
      @click="modal.open"
      class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow"
    >
      Abrir Modal
    </button>
  </Container>

  <Modal>
    <h2 class="text-xl font-bold mb-2">Hola, soy un modal 🎉</h2>
    <p class="text-gray-600">
      Este modal está controlado con Pinia y renderizado con Teleport.
    </p>
    <button
      @click="modal.close"
      class="mt-4 px-4 py-2 bg-pink-500 hover:bg-pink-600 text-white rounded"
    >
      Cerrar
    </button>
  </Modal>
</template>