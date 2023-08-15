<script setup>
defineProps({
    message: {
        type: String,
    },
});
</script>

<template>
    <small v-show="message" class="pt-5 invalid" >
        {{ message }}
    </small> 
    
</template>
