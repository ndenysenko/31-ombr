<template>
    <transition name="fade">
        <button v-show="showButton"
            class="fixed bottom-3 left-3 z-50 btn btn-sm btn-neutral shadow-lg hover:scale-110 transition-transform duration-300"
            aria-label="Scroll to top" @click="scrollToTop">
            <Icon name="mdi:arrow-top-thick" size="24" class="" />
        </button>
    </transition>
</template>
<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const showButton = ref(false);

const handleScroll = () => {
    showButton.value = window.scrollY > 200; // show after 200px
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
