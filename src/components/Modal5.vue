<script setup>
const visible = defineModel()
</script>

<template>
  <div v-if="visible" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    <div class="bg-white p-4 rounded">
      <p>Modal 4: defineModel()</p>
      <button @click="visible = false">Cerrar</button>
    </div>
  </div>
</template>

<!-- 
defineModel()

 El más limpio
Solo funciona con <script setup>, y si quieres aún menos código.

-->