<script setup>
import { computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    open: {
        type: Boolean,
        default: false,
    },
    closeable:{
        type: Boolean,
        default: true,
    },
    class: {
        type: String,
        default: "p-20 br-10px"
    }
});

const emit = defineEmits(['close']);


const closeOnEscape = (e) => {
    if (e.key === 'Escape' && props.open) {
        onClose();
    }
};

onMounted(() => document.addEventListener('keydown', closeOnEscape));

onUnmounted(() => {
    document.removeEventListener('keydown', closeOnEscape);
});


const onClose =(e)=>{
    if(props.closeable === true){
        emit('close')
    }
}

</script>

<template>
     <teleport to="body">

        <Transition name="fade" appear>
            <div v-if="props.open"  @click="onClose" class="fixed bg-modal"></div>
        </Transition>
        <Transition name="pop" appear>
            <div v-if="props.open " class="modal" role="dialog">
            
                <div :class="props.class">
                    <slot/>
                </div>
            </div>
        </Transition>
     </teleport>
</template>

<style>
    .fade-enter-active, .fade-leave-active{
        transition: opacity 0.5s ease-in-out;
    }
    .fade-enter-from, .fade-leave-to{
        opacity: 0;
    }

    .pop-enter-active, .pop-leave-active{
        transition: .5s all cubic-bezier(0.075, 0.82, 0.165, 1)
    }
    .pop-enter-from, .pop-leave-to{
        opacity: 0;
        transform: translateX(-50%) ;
    }

</style>
