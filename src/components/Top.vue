<script setup>
import { onMounted, ref } from 'vue';
import Left from './icons/Left.vue';
const top = ref(null)
onMounted(()=>{
    document.addEventListener('scroll',(e)=>{
       if(window.scrollY>300){
            if(top.value){
                top.value.classList.add('visible');
            }
           return
       }else{
            if(top.value){
                top.value.classList.remove('visible');
            }
           return
       }
      
    })
   
})
</script>
<template>
    <a ref="top" class="top br-50 center " href="#"><Left/></a>
</template>
