<script setup>
   import {ref} from 'vue'
   import SidebarComponent from './sidebarComponent.vue';
   import NavbarComponent from './NavbarComponent.vue';

   const sidebarOpen = ref(false)
</script>

<template>
     <div class="flex h-screen bg-gray-100">

         <div v-if="sidebarOpen" @click="sidebarOpen = false" class="fixed inset-0 bg-black/40 z-30 md:hidden"></div>

          <SidebarComponent :open="sidebarOpen" @close="sidebarOpen=false"></SidebarComponent>

          <div class="flex-1 flex flex-col">
             <NavbarComponent @toggle="sidebarOpen= !sidebarOpen"></NavbarComponent>
              <main class="flex-1 overflow-y-auto p-6">
                  <RouterView/>
              </main>
            </div>
   </div>
</template>
