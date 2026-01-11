<script setup>
 import {ref} from 'vue'

  defineEmits(['toggle'])
  const userMenuOpen = ref(false)
  //Simulacion
  const user = {
    name : 'Frank Pezo',
    photo : 'https://ui-avatars.com/api/?name=Frank+Pezo&background=0f172a&color=fff'
  }

</script>


<template>
     <header class="h-16 bg-white border-b border-slate-200 flex items-center px-4 md:px-6">
      <button @click="$emit('toggle')" class="md:hidden p-2 rounded-lg hover:bg-slate-100">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-slate-700"
           fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"/>
      </svg>
    </button>

      <div class="flex-1"></div>
      <!--Perfil info-->
      <div class="relative">
            <button @click="userMenuOpen = !userMenuOpen" class="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-slate-100 transition">
               <img :src="user.photo" class="w-9 h-9 rounded-full border border-slate-200">
                <span class="hidden md:block text-sm text-slate-600">{{ user.name }}</span>
            </button>

            <div v-show="userMenuOpen" class="absolute right-0 mt-2 w-48 bg-white border border-slate-200 rounded-xl shadow-lg overflow-hidden text-sm">
               <RouterLink class="block px-4 py-3 hover:bg-slate-100">Pefil</RouterLink>
               <RouterLink class="block px-4 py-3 hover:bg-slate-100">Configuración</RouterLink>
                <div class="border-t border-slate-200"></div>
                 <button class="w-full text-left px-4 py-3 text-red-600 hover:bg-red-50">
          <RouterLink to="/"> Cerrar sesión</RouterLink>
        </button>
            </div>
      </div>
     </header>

</template>
