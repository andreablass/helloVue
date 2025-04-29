import { onBeforeUnmount, onUnmounted, useSlots} from "vue";

export function useSol() {
    onBeforeUnmount (() => {
        console.log("☁️ El sol está por ocultarse...")
    });

    onUnmounted (() => {
        console.log('🌑 El sol ya se ocultó');
    })
}