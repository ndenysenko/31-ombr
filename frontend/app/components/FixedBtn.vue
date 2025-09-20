<template>
    <div class="fixed bottom-3 right-3 z-100 transition-transform duration-300 flex flex-col gap-2"
        aria-label="Scroll to top">
        <a href="/contacts" class="btn btn-sm btn-primary shadow-lg hover:scale-110">
            <Icon name="mdi:email" size="24" />
        </a>
        <a href="/support" class="btn btn-sm btn-primary shadow-lg hover:scale-110">
            <Icon name="mdi:charity" size="24" />
        </a>
    </div>
</template>
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
