<script setup>
const props = defineProps({
    class:{
        String,
        default: null,
    }
})

const getClass =()=>{
    if(props.class){
        return "loader "+props.class
    }
    return "loader l-xl l-c"
    
}


</script>
<template>
    <div :class="getClass()"></div>
</template>