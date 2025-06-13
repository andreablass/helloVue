<script setup>
import Container from "@/components/container/Index.vue";
import { useUserStore } from "@/stores/user";
const user = useUserStore();
const props = defineProps({
  title: {
    type: String,
  },
});
</script>

<template>
  <header class="border-gray-100 shadow-lg bg-white text-black p-2">
    <Container>
      <h1>{{ title }}</h1>
      <div class="container mx-auto flex items-center justify-between">
        <div class="flex items-center">
          <a href="/" class="text-2xl font-bold text-black"> Andrea </a>
          <div>
            <img :src="user.avatar" alt="avatar" class="w-8 h-8 rounded-full" />
            <span class="font-semibold text-sm">Hola, {{ user.name }} 👋</span>
          </div>
        </div>
        <div class="flex items-center space-x-4">
          <div class="relative">
            <form>
              <input
                type="text"
                name="q"
                placeholder="Search..."
                class="px-4 py-2 rounded-full bg-gray-100 border-0 pl-10 text-black"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <button
                type="submit"
                class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              ></button>
            </form>
          </div>
        </div>
      </div>
    </Container>
  </header>
</template>

