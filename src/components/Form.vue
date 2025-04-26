<script>
import { ref } from 'vue';

const message = ref('');

</script>


<template>
    <div>
        <input v-model="message" placeholder="Escribe algo aquí">
        <p>El mensaje es: {{ message }} </p>
    </div>
</template>