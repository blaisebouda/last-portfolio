<script setup>
import { ref } from 'vue'
const active = ref(false)


</script>
<template>
    <header class="flex j-center j-between" >
        <div>
           <a class="center " href="#"><img src="/logo.png" width="40" alt=""></a>
        </div>
        <div :class="{'menu center active': active, 'menu center': !active}" @click="active =!active">
          <span></span>
        </div>
        <nav :class="{'active': active}" @click="active=false">
            <ul>
                <li><a class="active" href="#home">Accueil</a></li>
                <li><a href="#about">A propos</a></li>
                <li><a href="#competence">Compétence</a></li>
                <li><a href="#technos">Technos</a></li>
                <li><a href="#realisations">Réalisations</a></li>
                <li>  <a href="#contact" class="btn btx">Me contacter</a></li>
            </ul>
        </nav>
    </header>
</template>