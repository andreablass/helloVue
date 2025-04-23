import { onMounted, onUnmount } from 'vue';

export function usePedido(pedidoId) {
  onMounted(() => {
    console.log(`Pedido ${pedidoId} ha sido dado de alta.`);
  });

  onBeforeUnmount(() => {
    console.log(`Pedido ${pedidoId} ha sido dado de baja.`);
  });
}
