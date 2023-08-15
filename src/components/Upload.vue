<script setup>
import PrevImgx from './PrevImgx.vue';
import { resizeImage } from '../helpers/resizeImage'
import { ref } from 'vue';

const props = defineProps({
    maxSize:{
        type: Number,
        required: true,
    },
    disabled:{
        type: Boolean,
        default: false
    }
    
})

//traitement des images
const imagesRezises = ref({});
const loading = ref(false);

const emit = defineEmits(['images:update']);

function ImageChange(event){
     const files = Array.from(event.target.files);

     files.map(async (file) =>{
            try {
                loading.value = true;
                const img = await resizeImage({ file: file, maxSize: props.maxSize});
                imagesRezises.value[file.name] ={
                    initial:{
                        size: file.size,
                        url: URL.createObjectURL(file)
                    },
                    final:{
                        size: img.size,
                        url: URL.createObjectURL(img)
                    }
                    
                };
                loading.value = false;
            } catch (error) {
                console.log(error);
            }
        
      }) 
    
} 

</script>

<template>
    <input
        type="file"
        accept="image/png, image/jpeg"
        class="form-file"
        multiple
        @change="ImageChange"
        :disabled="disabled"
       
    >
    
    <PrevImgx v-if="loading || Object.keys(imagesRezises).length>0" :loading="loading" :images="imagesRezises"/>
</template>