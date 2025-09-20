<template>
    <div class="hero relative">
        <div class="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 z-0" />
        <div class="container relative">
            <div class="w-full h-full text-center py-42">
                <h1>Долучайся до захисту</h1>
                <div class="flex gap-1 justify-center">
                    <button class="btn btn-lg btn-primary">Приєднатися</button>
                    <button class="btn btn-lg btn-primary bg-base-200 btn-dash">Підтримати</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="css" scoped>
.hero {
    background: url("./hero-img.webp");
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 90vh;
}
</style>