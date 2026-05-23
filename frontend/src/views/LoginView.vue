<script setup lang="ts">
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Tentativo di login con:', email.value, password.value)
}
</script>

<template>
  <div class="w-full max-w-md">
    <form @submit.prevent="handleLogin" class="bg-white shadow-xl rounded-2xl px-8 pt-8 pb-8 mb-4 border-t-4 border-blue-500">
      
      <h2 class="text-3xl font-bold mb-8 text-center text-gray-800">
        Benvenuto in Core
      </h2>
      
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
          Indirizzo Email
        </label>
        <input 
          v-model="email" 
          class="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
          id="email" 
          type="email" 
          placeholder="es. mario.rossi@email.com" 
          required
        >
      </div>
      
      <div class="mb-8">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input 
          v-model="password" 
          class="shadow-sm appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all" 
          id="password" 
          type="password" 
          placeholder="••••••••" 
          required
        >
      </div>
      
      <div class="flex items-center justify-between">
        <button class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors" type="submit">
          Accedi
        </button>
      </div>
    </form>

    <p class="text-center text-gray-500 text-sm">
      &copy; 2026 Core To-Do List. Tutti i diritti riservati.
    </p>
  </div>
</template>