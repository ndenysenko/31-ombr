<script setup>
import FaqList from "~/components/FaqList.vue";


</script>
<template>
    <section class="py-12">
        <div class="container px-4">
            <div class="flex justify-between items-center mb-4">
                <div>
                    <h2>FAQ</h2>
                    <p class="subheading">Відповіді на найбільш поширені запитання</p>
                </div>
                <button class="btn btn-primary btn-dash">Дізнатися більше</button>
            </div>
            <FaqList class="w-full" />
        </div>
    </section>
</template>
<style lang="css" scoped></style>