<script setup>

</script>

<template>
  <div>HomePage</div>
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