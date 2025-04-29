import { ref, onBeforeUpdate, onUpdated } from 'vue';

export function useNombre() {
  const nombre = ref('Andrea');
  let nombreAntes = '';

  onBeforeUpdate(() => {
    console.log('Antes de actualizar el nombre:', nombre.value);
    nombreAntes = nombre.value;
  });

  onUpdated(() => {
    console.log('Nombre actualizado.');
    console.log('De:', nombreAntes, 'A:', nombre.value);
  });

  return {
    nombre
  };
}
