<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <!-- Sfondo grigio a tutto schermo, centrato -->
  <div class="min-h-screen bg-gray-100 flex items-center justify-center p-4">
    <!-- RouterView caricherà qui dentro la pagina di Login o la Dashboard -->
    <RouterView />
  </div>
</template>