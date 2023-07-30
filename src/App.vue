<template>
  <div>
    <div>
      <router-link to="/register" v-if="useStore.logged">Logout</router-link>
      <router-link to="/register" v-else>Login</router-link>
    </div>
    <h1>Vue App</h1>
    <nav>
     
      <router-link to="/register">Register |</router-link>
      <router-link to="/">Home |</router-link>
      <router-link to="/login">Login</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script setup>
import { useUserStore } from './stores/user';

const useStore = useUserStore()

const logout = ()=>{
  useStore.logged = false;
  

}
</script>