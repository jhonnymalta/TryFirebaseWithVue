<template>    
    <div>
        <h2>Nome Minúsculo:{{ userStore.minuscula }}</h2>
        <h2>login</h2>
    </div>
</template>

<script setup>
import {storeToRefs} from  'pinia'
import {useUserStore} from '../stores/user'
const userStore = useUserStore()



</script>