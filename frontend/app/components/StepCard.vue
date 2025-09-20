<script setup>
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({ step: Object })
</script>
<template>
    <li class="step-card w-full max-w-xs mx-auto relative">
        <!-- Badge -->
        <div class="badge badge-secondary badge-xl mb-3 text-primary text-lg"> [0{{ step.id }}] </div>
        <!-- Content with corners -->
        <div class="relative p-2 px-3">
            <h3 class="text-lg md:text-xl font-semibold">{{ step.text }}</h3>
            <!-- Decorative corners -->
            <span class="corner top-left"></span>
            <span class="corner top-right"></span>
            <span class="corner bottom-left"></span>
            <span class="corner bottom-right"></span>
        </div>
    </li>
</template>
<style scoped>
.step-card {
    position: relative;
    overflow: hidden;
}

/* Corners styling */
.corner {
    position: absolute;
    width: 0.5rem;
    height: 0.5rem;
    border: 1px solid var(--color-border);
}

/* Top left */
.corner.top-left {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
}

/* Top right */
.corner.top-right {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
}

/* Bottom left */
.corner.bottom-left {
    bottom: 0;
    left: 0;
    border-right: none;
    border-top: none;
}

/* Bottom right */
.corner.bottom-right {
    bottom: 0;
    right: 0;
    border-left: none;
    border-top: none;
}
</style>
