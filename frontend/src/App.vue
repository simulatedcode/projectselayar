<script setup lang="ts">
import Maps from './components/MapsSelayar.vue'
</script>

<template>
  <div class="relative">
    <div class="grid grid-cols-12 fixed z-50 top-3 left-14">
      <div class="col-span-2">
        <div class="flex justify-between items-center">
          <span class="border-2 border-gray-400 bg-white px-6 py-4 rounded-full font-bold text-xl">Kisah Selayar</span>
        </div>
      </div>
      <div class="col-start-10 col-span-4 place-self-center">
        <ul class="flex items-center space-x-4">
          <li class="border-2 border-gray-400 bg-white px-6 py-4 rounded-full shadow-lg font-semibold">Kisah</li>
          <li class="border-2 border-gray-400 bg-white px-6 py-4 rounded-full shadow-lg font-semibold">Tentang</li>
          <li class="border-2 border-gray-400 bg-white px-6 py-4 rounded-full shadow-lg font-semibold">Arsip</li>
        </ul>
      </div>
    </div>
    <div>
      <Maps />
    </div>
  </div>
</template>
