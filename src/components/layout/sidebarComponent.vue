<script setup>
import { ref } from 'vue'

defineProps({ open: Boolean })
const emit = defineEmits(['close'])
const productosOpen = ref(false)
</script>

<template>
  <aside
    class="fixed md:static inset-y-0 left-0 z-40 w-64 bg-white bg-gradient-to-r from-slate-900 to-slate-800
           border-r border-slate-200 dark:border-slate-800
           transform transition-transform duration-300 ease-in-out"
    :class="open ? 'translate-x-0' : '-translate-x-full md:translate-x-0'"
  >
    <!-- BRAND -->
    <div class="h-16 px-6 flex items-center border-b border-slate-200 dark:border-slate-800">
      <span class="text-lg font-semibold tracking-wide text-slate-800 dark:text-white">
        FONKI
      </span>
    </div>

    <!-- MENU -->
    <nav class="p-4 space-y-1 text-sm">

      <RouterLink
        to="/app/dashboard"
        @click="emit('close')"
        class="group flex items-center justify-between px-4 py-3 rounded-xl
               text-slate-600 dark:text-slate-300
               hover:bg-slate-100 dark:hover:bg-slate-800
               transition"
        active-class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium"
      >
        Dashboard
      </RouterLink>

      <!-- Productos -->
      <button
        @click="productosOpen = !productosOpen"
        class="w-full flex items-center justify-between px-4 py-3 rounded-xl
               text-slate-600 dark:text-slate-300
               hover:bg-slate-100 dark:hover:bg-slate-800 transition"
      >
        <span>Productos</span>
        <span class="text-xs opacity-60 transition-transform"
              :class="productosOpen ? 'rotate-180' : ''">⌄</span>
      </button>

      <div v-show="productosOpen" class="ml-4 mt-1 space-y-1">

        <RouterLink
          to="/app/productos"
          @click="emit('close')"
          class="block px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400
                 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          active-class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
        >
          Listado
        </RouterLink>

        <RouterLink
          to="/app/productos/nuevo"
          @click="emit('close')"
          class="block px-4 py-2 rounded-lg text-slate-500 dark:text-slate-400
                 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          active-class="bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white"
        >
          Nuevo producto
        </RouterLink>

      </div>

    </nav>
  </aside>
</template>
