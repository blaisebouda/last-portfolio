<script setup>
import Loader from './Loader.vue'
import Xmark from './icons/Xmark.vue';
import OpenImage from './OpenImage.vue';
import { ref } from 'vue';

const props = defineProps({
    images: {
        type: Object,
        required: true,
    },
    loading:{
      type: Boolean,
      required : false
    }
})

const emit = defineEmits(['delete:images']);
const onDelete =(key) =>{
  delete props.images[key]
  emit('delete:images',key)
}

const openModal = ref(false)
const cImg =ref({});

const currentModal = async (img)=>{
  cImg.value = await img
  openModal.value = true
}

</script> 

<template>
      <div class="fw-600 pt-10">{{Object.keys(images).length}} Image{{ Object.keys(images).length>1?'s':'' }}</div>
      <div class="fileImgxPrev br-5px  g-5 p-10">
          <div v-for="(img, key) in images" style="position: relative;" > 
            <img :src="img.final.url" @click="currentModal(img)">
            <button @click.prevent="onDelete(key)" class="close r-5 center "><Xmark/> </button>
          </div>
        <Loader v-if="loading"/>
      </div>
      <OpenImage v-if="openModal" @close="openModal=!openModal" :open="openModal" :image="cImg" />
</template>
