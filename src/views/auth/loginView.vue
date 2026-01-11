<script setup>

</script>


<template>
     <div class="min-h-screen grid grid-clos-1 md:grid-cols-2">
          <div class="hidden md:flex relative bg-cover bg-center" style="background-image: url('/login-bg.jpg');">
               <div class="absolute inset-0 bg-gradient-to-r from-slate-900 to-slate-700"></div>

               <div class="relative z-10 flex flex-col justify-center px-12 text-white">
                  <h2 class="text-4xl font-bold leading-tight mb-4">
                       Panel Administrativo
                  </h2>
                    <p class="text-lg text-blue-100 max-w-md">
          Gestiona productos, usuarios y reportes desde un solo lugar.
        </p>
               </div>
          </div>

          <!--Forumlario-->
          <div class="flex items-center justify-center bg-slate-50 px-6">
               <div class="w-full max-w-md">
                     <div class="bg-white rounded-2xl shadow-xl p-8">
                          <h1 class="text-2xl font-bold text-slate-800 mb-2">Bienvenido</h1>
                          <form class="space-y-5">
                              <div>
                                  <label class="block text-sm font-medium text-slate-600 mb-1">
                                    Correo eléctronico
                                  </label>
                                  <input type="email" class="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indio-500 focus:border-indigo-500 transition" placeholder="correo@gmail.com">
                              </div>
                              <div>
                                   <label class="block text-sm font-medium text-slate-600 mb-1">Contraseña</label>
                                   <input type="password" class="w-full rounded-lg border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition" placeholder="*********">
                              </div>
                              <div class="flex items-end justify-content-end text-sm">
                                <a href="#" class="text-indigo-600 hover:underline">¿Olvidaste tu contraseña?</a>

                              </div>

                              <button type="submit" class="w-full bg-slate-700  hover:bg-slate-900 text-white font-medium py-3 rounded-lg
                               transition transform hover:-translate-y-0.5 shadow-md"><RouterLink to="/app">Iniciar sesión</RouterLink></button>
                          </form>

                          <p class="text-center text-sm text-slate-500 mt-6">¿No tienes una cuenta?
                            <RouterLink to="/registro" class="text-slate-900 font-medium hover:underline">Crear cuenta</RouterLink>
                          </p>
                     </div>
               </div>
          </div>
     </div>
</template>
