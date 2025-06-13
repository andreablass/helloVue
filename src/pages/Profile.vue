<script setup>
import { useUserStore } from "@/stores/user";
import { ref } from "vue";

const user = useUserStore();
</script>

<template>
  <Container>
    <h1 class="text-2xl font-bold my-4">Perfil de Usuario</h1>

    <div class="p-4 border rounded max-w-md mx-auto mt-4">
      <label class="block mb-2 text-sm text-gray-600">Nombre</label>
      <input
        v-model="user.name"
        class="border p-2 w-full rounded"
      />

      <div class="mt-4">
        <p><strong>Vista previa:</strong> {{ user.name }}</p>
        <img :src="user.avatar" alt="Avatar" class="w-16 h-16 mt-2 rounded-full" />
      </div>
    </div>
  </Container>
</template>
