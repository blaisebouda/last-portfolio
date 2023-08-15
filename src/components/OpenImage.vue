<script setup>
import Modal from './Modal.vue';
import Xmark from './icons/Xmark.vue';
import { ref } from 'vue';
import Download from './icons/Download.vue';

const props = defineProps({
    image:{
        type: Object,
        required: false,
    },
    open:{
        type: Boolean,
        default: false,
    }
})

const initial = ref(null)
const getInitial =  (e) =>{
    initial.value ={
        w: e.target.naturalWidth,
        h: e.target.naturalHeight
    }
}
const final = ref(null);

const humanSize =(size, precision=2)=>{
    const i = Math.floor(Math.log(size) / Math.log(1024));
    return (size / Math.pow(1024, i)).toFixed(precision).toString() + [' o',' ko',' Mo'][i]
}

</script>

<template>
    <Modal :open="open" >
        <div>
            <button @click="$emit('close')"  class="close r-10 center "><Xmark/> </button>
            <div class="detail">
                <div>
                    <div>
                        <b class="c-p" >Initial Image</b>
                         <div v-if="initial">
                            <div >Largeur: {{ initial.w }} px </div> 
                            <div >Hauteur: {{ initial.h }} px </div>
                         </div>
                        <div class="pb-10">Taile: {{ humanSize(image.initial.size) }} </div>

                    </div>
                    
                    <img :src="image.initial.url" @load="getInitial">
                </div>
                <div>
                    <div>
                        <b style="color: #34c436;">New Image</b>
                        <div v-if="final">Largeur: {{ final.naturalWidth }} px </div> 
                         <div v-if="final">Hauteur: {{ final.naturalHeight }} px </div>
                         <div class="pb-10">Taile: {{ humanSize(image.final.size) }} </div>
                    </div>
                    <img ref="final" :src="image.final.url"  alt="">
                    <div>
                        <a class="btn c-g-10 btn-primary" :href="image.final.url" download> <Download/> <span>Télecharger</span></a>
                    </div>
                </div>
            </div>  
        </div>
    </Modal>
</template>
    
<style>
    .detail{
        display: grid;
        gap: 20px;
    }
    .detail img{
        width: auto;
        height: auto;
        max-width: 100%;
        max-height: 400px;
        margin: auto;
    }
    .btn .icon{
        height: 16px;
    }
    @media screen and (min-width:900px) {
        .detail{
            grid-template-columns: 1fr 1fr;
        }
    }
</style>