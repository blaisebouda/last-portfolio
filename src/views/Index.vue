<script setup>
import Header from '../components/Header.vue';
import Home from '../components/Home.vue';
import About from '../components/About.vue';
import Competence from '../components/Competence.vue';
import Technos from '../components/Technos.vue';
import Realisations from '../components/Realistions.vue';
import Contact from '../components/Contact.vue';
import Copy from '../components/Copy.vue';
import Top from '../components/Top.vue'
import { onMounted } from 'vue';

onMounted(()=>{
   
 const threshold = .3

const visible = (entries ,observer) =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            const el = entry.target;
            el.classList.add('reveal-visible');
            let id = el.getAttribute('id')
            let ancor = document.querySelector(`a[href="#${id}"]`)
           if(ancor===null){
                return
           }
           ancor.parentElement.parentElement
           .querySelectorAll('.active')
           .forEach(e=>e.classList.remove('active'))
           ancor.classList.add('active')
        }
       
    })
}

const observer = new IntersectionObserver(visible ,{threshold :threshold})
document.querySelectorAll('.section').forEach(element=>observer.observe(element))

})

</script>

<template>
    <Header />
    <Home/>
    <div class="p-20">
        <About/>
        <Competence/>
        <Technos/>
        <Realisations/>
        <Contact/>
    </div>
    <Copy/>
    <Top/>
</template>
