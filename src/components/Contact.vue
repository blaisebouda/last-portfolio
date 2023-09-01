<script setup>
import Mail from './icons/Mail.vue';
import Linked from './icons/Linked.vue';
import Facebook from './icons/Facebook.vue';
import Gitub from './icons/Gitub.vue';
</script>
<template>
    <div id="contact" class="section reveal">
        <div class="title pt-100 ">Me <span>R</span>etrouver</div>
        <div class="contact pt-30 ">
            <div class="card m-auto p-20">
                <div class="center c-g-10">
                    <div class="social center"> <a class="flex" href="https://www.linkedin.com/in/blaise-bouda-55ab93249/"><Linked/> </a></div>
                    <div class="social center"><a class="flex" href="https://github.com/BlaiseBouda/"> <Gitub/> </a> </div>
                    <div class="social center"> <a class="flex" href="https://facebook.com/blaise.bouda.792"><Facebook/> </a></div>
                </div>
                <div class="mail pt-20"> <a class="btn btn-primary c-g-10" href="mailto:blaisebouda05@gmail.com"><Mail/> Par Mail</a></div>
            </div>
        </div>  
    </div>
</template>