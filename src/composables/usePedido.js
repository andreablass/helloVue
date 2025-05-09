import { ref, onMounted, onUpdated } from 'vue';

export function usePedido() {
  const pedido = ref();

  onMounted(() => {
    console.log('Pedido montado');
    pedido.value = ' Pedido inicial cargado';
  });

  onUpdated(() => {
    console.log('El pedido fue actualizado');
  });

  const actualizarPedido = () => {
    pedido.value = 'Pedido actualizado';
  };

  return {
    pedido,
    actualizarPedido
  };
}
