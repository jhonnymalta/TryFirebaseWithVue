<template>
    <div>
        <h1>Register</h1>
        <form @submit.prevent="handleSubmit">
            <label for="Email"></label>
            <input type="email" placeholder="Type your email here" v-model.trim="email">
            <label for="Password"></label>
            <input type="password" placeholder="type your password" v-model.trim="password">
            <button type="submit">Create</button>
        </form> 
    </div>
</template>


<script setup>
import { ref } from 'vue'
import {useUserStore} from '../stores/user'




const userStore = useUserStore()
const email = ref('')
const password  = ref('')
const handleSubmit =  async ()=>{
    if(!email.value || !password.value){
        alert('Preencha todos os campos!')
    }
   await userStore.RegisterUser(email.value,password.value)
   
}   

  

</script>