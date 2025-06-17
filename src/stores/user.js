// src/stores/user.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const name = ref('Andrea Blass')
  const avatar = ref('https://i.pravatar.cc/150?u=rosa') // imagen dummy

  function updateName(newName) {
    name.value = newName
  }

  return { name, avatar, updateName }
})
