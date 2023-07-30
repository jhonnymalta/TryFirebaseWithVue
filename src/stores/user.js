import { defineStore } from "pinia";
import {computed} from 'vue'
import {ref} from 'vue';




export const useUserStore = defineStore('userStore',{
   state: () => ({
        userData: {
            email:'jotinha',
            password:''
        },
        logged: false
   }),
   getters:{
        maiuscula(state){
            return state.userData.email.toUpperCase();
        },
        minuscula(state){
            return state.userData.email.toLowerCase();
        }        
   },
   actions:{
        RegisterUser(email,password){
        try {
            this.userData.email = email ;
            this.userData.password = password
            this.logged = true
            console.log(this.userData)
        } catch (error) {
            console.log(error)
        }
            
        }
   }  

    
});