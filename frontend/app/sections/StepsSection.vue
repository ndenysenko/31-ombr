<script setup>
import { ref } from "vue";
import StepCard from "../components/StepCard.vue";

let id = 1;
const steps = ref([{ id: id++, text: "Обрати професію" }, { id: id++, text: "Заповнити анкету" }, { id: id++, text: "Чекати дзвінка" }]);

</script>
<template>
    <section id="steps-section" class="steps py-12">
        <div class="container px-4">
            <h2> Твій шлях </h2>
            <p class="subheading accent-text">Твої кроки, щоб долучитися до нас </p>
            <ul class="flex flex-col sm:flex-row gap-4 w-full text-center justify-center mt-[4rem]">
                <StepCard v-for="step in steps" :key="step.id" :step="step" />
            </ul>
        </div>
    </section>
</template>
<style lang="css" scoped></style>