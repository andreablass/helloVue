<script setup>
import { useUserStore } from '@/stores/user'
const user = useUserStore()
</script>

<template>
  <div class="p-4 border rounded max-w-md mx-auto mt-4">
    <h2 class="text-lg font-bold mb-2">Editar Perfil</h2>
    <label class="block mb-2 text-sm text-gray-600">Nombre</label>
    <input
      v-model="user.name"
      class="border p-2 w-full rounded"
    />
  </div>
</template>
