<script setup>
import Upload from '../components/Upload.vue';
import TextInput from '../components/TextInput.vue';
import InputError from '../components/InputError.vue'
import Copy from '../components/Copy.vue'
import Gitub from '../components/icons/Gitub.vue';
import { ref } from 'vue';

const max = ref(270)
const error = ref(null);
const valided =()=>{
  
  if(max.value<20){
    error.value ='La taille est top petite'
    return
  }

  if(max.value>2000){
    error.value ='La taille est trop grande'
    return
  }
  error.value =null;

}

</script>
<template>
  <div class="c-xl p-20 place-center">
    <div>
      <h1 class="c-p t-c"> ResizeImages</h1>
      <p>
          Une bibliothèque Vuejs qui vous permet de redimensionner les images et les affichées
          coté client avant l'upload.
          Le redimensionnement se fait de maniere automatique suivant la <b>taille max</b> 
          afin de conserver le ratio de l'image.
          Exemple : Pour une image de (1200x1600) avec une taille max de 270 l'image obtenu sera de (202x270).
         <div><b class="c-p">USAGE:</b> Chosisez un taille max (20 - 2000), ensuite selectionnez les images, enfin cliquez sur l'image pour l'aperçu.</div>
      </p>
       <div class="title pt-10">Personalisation</div>
      <div class="flex pt-30 c-g-10">
        <div>
          <label for="heigth">Taille max</label>
          <TextInput 
              id="max" 
              type="number"
              v-model.number="max" 
              :class="error ?  'is-invalid' :''"
              @input="valided"
            />
          <InputError v-if="error" :message="error"/>
        </div>
      </div>
     
      <form method="get">
        <div class="pt-10">
              <h3><label>Choisir un ou des image(s)</label></h3>
              <Upload :maxSize="max" :disabled="error? true:false" />
          </div>
      </form>
    </div>
  </div>
  <p class="center p-20" ><a class="btn btn-simple c-g-10" href="https://github.com/BlaiseBouda/resizeImages.git"><Gitub/> Code source </a> </p>
  <Copy/>
</template>

<style>
.c-xl{
  width: 100%;
  max-width: 600px;
  margin: auto;
}


</style>

