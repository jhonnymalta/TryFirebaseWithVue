<template>
    <div>
        <div>
            <h3>Bem vindo: {{userStore.userData.email}}  </h3>
            <h2>is logged: </h2>
        </div>
        <h1>HOME Page</h1>
    </div>
</template>

<script setup>
import {useUserStore} from '../stores/user'
const userStore = useUserStore()

const {userData} = userStore
</script>
